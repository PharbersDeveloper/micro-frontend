
export default class PhDlgCollectionController {
	constructor(id) {
		this.collections = []
		this.shownCollections = []
		this.selectCollections = []
		this.isIndeterminate = false
		this.checkAll = false
	}

	resetCollections(cols) {
		this.collections = cols
		this.shownCollections = this.collections
	}

	resetShowingCollections() {
		if (this.selectCollections.length === 0) {
			return this.collections
		} else {
			return this.selectCollections
		}
	}

	checkAllCollections(val) {
		// this.selectCollections = val ? this.collections : [];
		this.selectCollections = val ? this.shownCollections: [];
		this.isIndeterminate = false;
	}

	checkCollectionsItem(val) {
		let checkedCount = val.length;
		this.checkAll = checkedCount === this.shownCollections.length;
		this.isIndeterminate = checkedCount > 0 && checkedCount < this.shownCollections.length;
	}

	filterCollectionsByChar(val) {
		if (val.length > 0)
			this.shownCollections = this.collections.filter(x => x.startsWith(val))
		else
			this.shownCollections = this.collections
	}
}
