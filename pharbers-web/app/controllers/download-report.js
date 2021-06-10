import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
export default class DownloadReportController extends Controller {
    @tracked report = {};

    @action
	transferData() {
		this.report = this.model.reportsList[0]
	}
}
