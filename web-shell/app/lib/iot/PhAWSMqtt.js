/**
 * pqian@pharbers.com 2022.2.10
 */


 function generateId () {
    const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '0123456789-_'

    const charsetLength = charset.length

    const keyLength = 3 * 5
    let i, array = []
    for (i = 0; i < keyLength; i++) {
        array.push(charset.charAt(Math.floor(Math.random() * charsetLength)))   
    }
    return array.join('')
 }


const awsCrt = require("aws-crt");

function PhMQTT(config, callBack, timeoutQueue) {
    let connection = null;
    let intervalId = null;
    let timeoutId = null;
    let use_cache = [];
    const topic = config.topic;
    const client_id = generateId() // config.client_id;
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
                timeoutQueue.push(topic)
            }
        }, 1 * 1000);
    }

    const __subscribe = () => {
        const states = {
            "failed": true,
            "succeed": true,
            "succss": true
        }
        if (connection) {
            if (!callBack) { throw Error("CallBack Is Undefined") }
            connection.subscribe(topic, qos, (_, payload) => {
                time = new Date().getTime()

                const parameter = Object.assign({}, config.parameter)
                delete parameter.callBack

                const content = __byteToString(payload)

                const { id, projectId, date, status, jobCat } = JSON.parse(content)

                if (use_cache.indexOf(`${id}_${projectId}_${date}_${status}`) === -1) {
                    use_cache.push(`${id}_${projectId}_${date}_${status}`)
                    // 只接受jobCat为Notification标识
                    if (jobCat === "notification") {
                        // UnRegister 将错误的和完成的关掉连接
                        if (states[status] || false) {
							timeoutQueue.push(topic);
                        }
                        callBack(parameter, content); 
                    }
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
