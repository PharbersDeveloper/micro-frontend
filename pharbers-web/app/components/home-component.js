import Component from '@glimmer/component';
import { action } from '@ember/object'

export default class HomeComponentComponent extends Component {
    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action 
    downloadReport(data) {
        this.transitionToRoute(data.detail[0], 0)
    }

    @action
    toActivityPage(data) {
        let curType = data.detail[0],
            id = data.detail[1]
        
        this.transitionToRoute(curType, 0)
    }
}
