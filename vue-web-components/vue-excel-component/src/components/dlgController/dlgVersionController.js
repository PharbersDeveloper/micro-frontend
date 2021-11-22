
export default class PhDlgVersionController {
	constructor(id) {
		this.selectVersionTags = []
		this.versionCandidates = []
	}

	appendSelectVersionTags(tag) {
		this.selectVersionTags.push(tag)
	}

	removeSelectVersionTags(tag) {
		this.selectVersionTags = this.selectVersionTags.filter(function(item) {
			return item !== tag
		});
	}
}
