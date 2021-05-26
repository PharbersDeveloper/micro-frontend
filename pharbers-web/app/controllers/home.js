import Controller from '@ember/controller';
import { action } from "@ember/object"

export default class HomeController extends Controller {
    @action
    linkToPage(data) {
        console.log(data);
    }

    @action 
    downloadReport(value) {
        console.log(value);
    }
}
