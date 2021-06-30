import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class DownloadReportController extends Controller {
  @tracked reports = [];

  @action
  transferData() {
    this.reports = this.model.reportsList;
  }
}
