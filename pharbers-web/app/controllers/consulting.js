import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ConsultingController extends Controller {
  @action
  linkToPage(data) {
    this.transitionToRoute(data.detail[0]);
  }
}
