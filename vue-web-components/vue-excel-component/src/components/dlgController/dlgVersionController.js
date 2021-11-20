
export default class PhDlgVersionController {
	constructor(id) {
		this.selectVersionTags = []
	}

	appendSelectVersionTags(tag) {
		this.selectVersionTags.push(tag)
	}

	removeSelectVersionTags(tag) {
		this.selectVersionTags.remove(tag)
	}
}
