import Controller from '@ember/controller';
import { action } from "@ember/object"

export default class HomeController extends Controller {
    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action 
    downloadReport(data) {
        this.transitionToRoute(data.detail[0], 0)
    }
}
