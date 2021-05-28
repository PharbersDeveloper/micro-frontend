import Controller from '@ember/controller';
import { action } from "@ember/object"

export default class MaxController extends Controller {
    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }
}
