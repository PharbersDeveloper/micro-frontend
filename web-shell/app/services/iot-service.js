import Service from '@ember/service';
import { mqtt, io, iot } from "aws-crt";
import ENV from "web-shell/config/environment";

export default class IotServiceService extends Service {

    client = null
    connection = null
    config = null

    client_id = ENV.APP.AWS_IOT_DEFAULT_CLIENT_ID // 此id不能重复 准备用account id  #号替换_
    endpoint = ENV.APP.AWS_IOT_ENDPOINT
    aws_region = ENV.APP.AWS_REGION
    aws_access_id = ENV.APP.AWS_ACCESS_KEY
    aws_secret_key = ENV.APP.AWS_SECRET_KEY
    client_bootstrap = new io.ClientBootstrap()
    qos = mqtt.QoS.AtLeastOnce

    setClientId(id) {
        this.client_id = id
        return this
    }

    build() {
        const config_builder = iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder();
        config_builder.with_credentials(
            this.aws_region,
            this.aws_access_id,
            this.aws_secret_key);
        config_builder.with_clean_session(false); //将 clean_session参数设置为 False即表示连接应该是持久连接
        config_builder.with_client_id(this.client_id);
        config_builder.with_endpoint(this.endpoint);
        config_builder.with_ping_timeout_ms(5000);
        config_builder.with_keep_alive_seconds(5000);
        this.config = config_builder.build()
        this.client = new mqtt.MqttClient(this.client_bootstrap)

        return this
    }

	__byteToString(arrayBuffer) {
        return new TextDecoder().decode(arrayBuffer);
    }

    __heartbeat() {
        if (this.connection) {
            let sequence = 0
            setInterval(() => {
                sequence+=1
                this.connection.publish(
                    "pharbers/heartbeat",
                    JSON.stringify({
                        "message": `client_id => ${this.client_id}`,
                        "sequence": sequence
                    }),
                    mqtt.QoS.AtMostOnce,
                    false).catch(error => console.log("heartbeat"))
            }, 30 * 1000)
        }
    }

    async connect() {
        if (this.client) {
            this.connection = this.client.new_connection(this.config)
            await this.connection.connect()
            this.__heartbeat()
            console.log("connect")
        }
    }

    disconnect() {
        if (this.connection) {
            this.connection.disconnect()
            this.connection = null
            console.log("disconnect")
        }
    }

    setSub(topic = "pharbers", func) {
        if (this.connection) {
            if (!func) {
                throw Error("CallBack Is Undefined")
            }
            this.connection.subscribe(topic, this.qos, (_, payload) => {
                func(this.__byteToString(payload))
            })
        }
    }
}
