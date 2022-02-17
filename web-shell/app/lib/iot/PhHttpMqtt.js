/**
 * pqian@pharbers.com 2022.2.10
 */

function PhHttpMQTT(config, callBack, timeoutQueue) {
    let intervalId = null;
    const topic = config.topic || "pharbers";
    const client_id = config.client_id;
    const endpoint = config.endpoint;
    const qos = 1 // LeastOnce

    const __subscribe = () => {
        intervalId = setInterval(() => {
            // Query http mqtt interface 获取的数据交给callBack
        }, 1000 * 2) // 2秒 后续可编程参数，先实现
    }

    const connect = async () => {
        __subscribe();
    }

    const disconnect = () => {
        if (intervalId) {
            clearInterval(intervalId)
        }
    }

    return {
        "connect": connect,
        "disconnect": disconnect
    }

}

export { PhHttpMQTT }