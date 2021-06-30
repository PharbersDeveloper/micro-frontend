import Component from '@glimmer/component';
import { computed, set, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CpHomeComponent extends Component {
	// @tracked ddd
	@tracked allData = ""
	// init() {
	//     super.init(...arguments)
	//     // window.addEventListener('setItemEvent', function(event) {
	//     //     window.location.reload(true)
	//     // })
	// }

	@action
	transferData() {
		debugger
		this.allData = {
			activities: this.args["ddd"].activityData,
			reports: this.args["ddd"].reportsList,
		};
		this.allData = {
		    activities: this.model
		}
		console.log(this.allData);
	}

	@action
	linkToPage(data) {
		this.transitionToRoute(data.detail[0]);
	}

	@action
		downloadReport(data) {
		this.transitionToRoute(data.detail[0], 0);
	}

	@action
	toActivityPage(data) {
		let curType = data.detail[0],
		  index = data.detail[1];
		if (curType == 'boyunhui') {
		  this.transitionToRoute(curType, index);
		} else {
		  this.transitionToRoute(curType, 0);
		}
	}
}
