import Service from '@ember/service';
import { mqtt, io, iot } from "aws-crt";
import ENV from "web-shell/config/environment";

const credentials = {
	accessKeyId: "AKIAWPBDTVEAI6LUCLPX",
    secretAccessKey: "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",
    region: "cn-northwest-1"
}

export default class IotServiceService extends Service {

    client = null
    connection = null
    config = null

    client_id = "VQ4L9e4RGDZEI2Ln7fvE" // 次id不能重复 准备用account id  #号替换_
    endpoint = ENV.APP.AWS_IOT_ENDPOINT
    client_bootstrap = new io.ClientBootstrap()
    aws_region = credentials.region
    aws_access_id = credentials.accessKeyId
    aws_secret_key = credentials.secretAccessKey
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
            // this.__stringToArrayBuffer(this.client_id)
            
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

    // events(connection) { 
    //     connection.on("connect", (session_present) => { 
    //         console.log(`session_present ===> ${session_present}`)
    //     })

    //     connection.on("disconnect", () => { 
    //         console.log(`disconnect`)
    //     })

    //     connection.on("error", (error) => { 
    //         console.log(`error ===> ${error}`)
    //     })

    //     connection.on("interrupt", (error) => { 
    //         console.log(`interrupt ===> ${error}`)
    //     })

    //     connection.on("resume", (return_code, session_present) => { 
    //         console.log(`resume ===> ${return_code}  session_present  ====> ${session_present}`)
    //     })

    //     connection.on("message", (topic, payload, dup, qos, retain) => { 
    //         console.log(`topic ===> ${topic}  payload  ====> ${this.__byteToString(payload)}    dup  =====> ${dup}  qos  ===> ${qos}   retain  => ${retain}`)
    //     })
    // }

}
