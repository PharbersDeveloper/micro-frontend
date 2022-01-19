import Service from '@ember/service';
import { inject as service } from "@ember/service";
// import { mqtt, io, iot } from "aws-crt";

export default class IotServiceService extends Service {
    __config() {
        return {
            client_id: "VQ4L9e4RGDZEI2Ln7fvE",
            endpoint: "a23ve0kwl75dll-ats.iot.cn-northwest-1.amazonaws.com.cn",
            client_bootstrap: new io.ClientBootstrap(),
            aws_region: "cn-northwest-1",
            aws_access_id: "AKIAWPBDTVEAI6LUCLPX",
            aws_secret_key: "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",
            topic: "pharbers",
            qos: 1
        }
    }

	__byteToString(arrayBuffer) {
        return new TextDecoder().decode(arrayBuffer);
    }

    events(connection) { 
        connection.on("connect", (session_present) => { 
            console.log(`session_present ===> ${session_present}`)
        })

        connection.on("disconnect", () => { 
            console.log(`disconnect`)
        })

        connection.on("error", (error) => { 
            console.log(`error ===> ${error}`)
        })

        connection.on("interrupt", (error) => { 
            console.log(`interrupt ===> ${error}`)
        })

        connection.on("resume", (return_code, session_present) => { 
            console.log(`resume ===> ${return_code}  session_present  ====> ${session_present}`)
        })

        connection.on("message", (topic, payload, dup, qos, retain) => { 
            console.log(`topic ===> ${topic}  payload  ====> ${this.__byteToString(payload)}    dup  =====> ${dup}  qos  ===> ${qos}   retain  => ${retain}`)
        })
    }

    mqttConnect(func) {
        if (!func) {
            throw Error("CallBack Is Undefined")
        }

        // const config_builder = iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder();
        // config_builder.with_credentials(
        //     this.__config().aws_region,
        //     this.__config().aws_access_id,
        //     this.__config().aws_secret_key);
        // config_builder.with_clean_session(true); //将 clean_session参数设置为 False即表示连接应该是持久连接
        // config_builder.with_client_id(this.__config().client_id);
        // config_builder.with_endpoint(this.__config().endpoint);
        // // config_builder.with_ping_timeout_ms(5000);
        // // config_builder.with_keep_alive_seconds(5000);
        // const config = config_builder.build()
        // const client = new mqtt.MqttClient(this.__config().client_bootstrap)
        // const connection = client.new_connection(config)
        // this.events(connection)
        // // const timer = setTimeout(() => { console.log("Fuck");connection.disconnect() }, 10 * 1000 )
        // connection.connect()
        //     .then(success => {
        //         connection.subscribe(this.__config().topic, this.__config().qos, (topic, payload) => {
        //             func(topic, this.__byteToString(payload))
        //         })
        //         // connection.subscribe("$aws/events/presence/connected/VQ4L9e4RGDZEI2Ln7fvE", this.__config().qos, (topic, payload) => {
        //         //     console.log("conn")
        //         //     console.log(this.__byteToString(payload))
        //         // })
        //         // connection.subscribe("$aws/events/presence/disconnected/VQ4L9e4RGDZEI2Ln7fvE", this.__config().qos, (topic, payload) => {
        //         //     console.log("dis")
        //         //     console.log(this.__byteToString(payload))
        //         // })
        //         // clearTimeout(timer)
        //         console.log('连接成功', success)
        //     })
        //     .catch( err => {
        //         console.log('连接失败', err)
        //     })
        
    }
}
