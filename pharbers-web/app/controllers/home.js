import Controller from '@ember/controller';
import { action } from "@ember/object"

export default class HomeController extends Controller {
    @action
    toMore123(data) {
        console.log(data);
    }
}
