import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AboutUsController extends Controller {
  @action
  linkToPage(data) {
    this.transitionToRoute(data.detail[0]);
  }
}
