import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RwController extends Controller {
  @action
  linkToPage(data) {
    this.transitionToRoute(data.detail[0]);
  }
}
