/**
 * pqian@pharbers.com 2022.2.10
 */


const awsCrt = require("aws-crt");

function PhMQTT(config, callBack, timeoutQueue) {
    let connection = null;
    let intervalId = null;
    let timeoutId = null;
    let use_cache = [];
    const id = config.id;
    const topic = config.topic;
    const client_id = config.client_id;
    const endpoint = config.endpoint;
    const aws_region = config.aws_region;
    const aws_access_id = config.aws_access_id;
    const aws_secret_key = config.aws_secret_key;
    const timeout = config.timeout;
    let time = new Date().getTime();
    const client_bootstrap = new awsCrt.io.ClientBootstrap()
    const qos = awsCrt.mqtt.QoS.AtLeastOnce // 1

    const config_builder = awsCrt.iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder();

    config_builder.with_credentials( aws_region, aws_access_id, aws_secret_key);
    config_builder.with_clean_session(false); //将 clean_session参数设置为 False即表示连接应该是持久连接
    config_builder.with_client_id(client_id);
    config_builder.with_endpoint(endpoint);
    config_builder.with_ping_timeout_ms(5000);
    config_builder.with_keep_alive_seconds(5000);
    const mqttConfig = config_builder.build()
    const client = new awsCrt.mqtt.MqttClient(client_bootstrap)

    const __byteToString = (arrayBuffer) => {
        return new TextDecoder().decode(arrayBuffer);
    }
    const __heartbeat = () => {
        if (connection) {
            let sequence = 0
            intervalId = setInterval(() => {
                sequence += 1
                connection.publish(
                    "pharbers/heartbeat",
                    JSON.stringify({
                        "message": `client_id => ${client_id}`,
                        "sequence": sequence
                    }),
                    awsCrt.mqtt.QoS.AtLeastOnce,
                    false).catch(error => console.log("heartbeat"));
            }, 30 * 1000);
        }
    }

    const __timeout = () => {
        timeoutId = setInterval(() => {
            const currentTime = new Date().getTime() / 1000;
            if (currentTime - (time / 1000) > timeout) {
                timeoutQueue.push(id)
            }
        }, 1 * 500);
    }

    const __subscribe = () => {
        if (connection) {
            if (!callBack) { throw Error("CallBack Is Undefined") }
            connection.subscribe(topic, qos, (_, payload) => {
                time = new Date().getTime()
                const parameter = Object.assign({}, config.parameter)
                delete parameter.callBack
                const content = __byteToString(payload)
                const { id, projectId, date } = JSON.parse(content)
                if (use_cache.indexOf(`${id}_${projectId}_${date}`) === -1) {
                    use_cache.push(`${id}_${projectId}_${date}`)
                    callBack(parameter, content); 
                }
                
            })
        }
    }

    const connect = async () => {
        if (client) {
            connection = client.new_connection(mqttConfig);
            await connection.connect();
            __heartbeat(); // 测试重点
            __subscribe(); // 测试重点
            __timeout(); // 测试重点
        }
    }

    const disconnect = () => {
        if (connection && intervalId) {
            clearInterval(intervalId);
            clearInterval(timeoutId);
            connection.disconnect();
            intervalId = null;
            timeoutId = null;
            connection = null;
            use_cache = [];
            console.log("Mqtt Disconnect");
        }
    }

    return {
        "connect": connect,
        "disconnect": disconnect
    }

}

export { PhMQTT }
