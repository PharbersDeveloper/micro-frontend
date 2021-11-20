
export default class PhDlgCollectionController {
	constructor(id) {
		this.collections = []
		this.shownCollections = []
		this.selectCollections = []
		this.isIndeterminate = false
		this.checkAll = false
	}

	resetShowingCollections() {
		if (this.shownCollections.length == 0) {
			return this.collections
		} else {
			return this.shownCollections
		}
	}
}
