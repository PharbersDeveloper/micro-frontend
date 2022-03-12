/**
 * pqian@pharbers.com 2022.2.10
 */

function PhMQTT(config, callBack, destroyQueue) {
	let intervalId = null
	let timeoutId = null
	let use_cache = []
	let time = new Date().getTime()
	const topic = config.topic
	const endpoint = config.endpoint
	const timeout = config.timeout
	const uri = endpoint // https://apiv2.pharbers.com/phnotification/ TODO:整体测试结束后提出到env.js中

	const __subscribe = () => {
		if (!callBack) {
			throw Error("CallBack Is Undefined")
		}

		const parameter = Object.assign({}, config.parameter)
		delete parameter.callBack

		const states = {
			failed: true,
			fail: true,
			succeed: true,
			success: true
		}
		
		const url = `${uri}${parameter.projectId}/${parameter.ownerId}/${parameter.eventName}`
		
		
		intervalId = setInterval(async () => {
			const headers = {
				Authorization: "228410225613382e7ba9abae40f25a28b30d2b6e2c69261cbb279d39036239fe",
				Accept: "application/json",
				"Content-Type": "application/json",
			}
			const options = {
				method: "POST",
				headers,
				body: JSON.stringify({
					target: parameter.remoteResource,
					id: parameter.id,
					runnerId: parameter.runnerId,
					type: "ptp"
				})
			}
			const result = await fetch(url, options)
			const payload = await result.json()
			if (Object.keys(payload).length > 0) {
				const content = JSON.stringify(payload)
				const {
					status,
					jobCat,
					jobDesc,
					message
				} = payload
				

				const b64 = window.btoa(unescape(encodeURIComponent(content)))
				console.info("Find Local Cache Item ====> ",
					use_cache.find((item) => item === b64))
				

				if (!use_cache.find((item) => item === b64)) {
					// 只接受jobCat为Notification标识
					// TODO：@Alex 这部分需要重整一下
					if (jobCat === "notification") {
						use_cache.push(b64)
						time = new Date().getTime()

						// UnRegister 将错误的和完成的关掉
						if (jobDesc.indexOf("runDag") !== -1) {
							const {
								cnotification: { overallStatus }
							} = JSON.parse(message)
							// console.warn(overallStatus)
							const runDagState = states[overallStatus] || false
							if (runDagState) {
								setTimeout(() => {
									destroyQueue.push(topic)
								}, 1000 * 5)
								
							}
						} else {
							const state = states[status] || false
							if (state) {
								setTimeout(() => {
									destroyQueue.push(topic)
								}, 1000 * 5)
							}
						}
						callBack(parameter, content)
					}
				}
			}
		}, 1000 * 5) // 5秒 后续可编程参数，先实现
	}

	const __timeout = () => {
		timeoutId = setInterval(() => {
			const currentTime = new Date().getTime() / 1000
			if (currentTime - time / 1000 > timeout) {
				const parameter = Object.assign({}, config.parameter)
				delete parameter.callBack
				callBack(parameter, JSON.stringify({ status: "mqtt timeout" }))
				destroyQueue.push(topic)
			}
		}, 1000 * 3)
	}

	const connect = async () => {
		__subscribe()
		__timeout()
	}

	const disconnect = () => {
		if (intervalId) {
			clearInterval(intervalId)
			clearInterval(timeoutId)
			
		}

		use_cache = []
	}

	return {
		connect: connect,
		disconnect: disconnect
	}
}

export { PhMQTT }
