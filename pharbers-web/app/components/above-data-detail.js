import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AboveDataDetailComponent extends Component {
    @service router
    @action
	listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                if(e.detail[0].args.param.index != undefined) {
                    this.router.transitionTo(e.detail[0].args.param.name, e.detail[0].args.param.index)
                } else {
                    this.router.transitionTo(e.detail[0].args.param.name)
                }
                break
            default: 
                console.log("submit event to parent")
        }
	}

    @action
	registerListener(element) {
        element.allData = this.calAllData
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}

    get calAllData() {
        let image = [];
        let participantListAll = [];
        let eventListAll = [];
        for (let x = 0; x < this.args.model.imageList.length; x++) {
            image[x] = this.args.model.imageList.filter(
                (it) => this.args.model.imageIds[x].indexOf(it.id) != -1
            );
        }
        for (let i = 0; i < this.args.model.participantList.length; i++) {
            participantListAll[i] = {
                participant: this.args.model.participantList[i],
                image: image[i][0],
            };
        }
        for (let x = 0; x < this.args.model.eventList.length; x++) {
            this.args.model.eventList[x].speakers.then((a) => {
                eventListAll[x] = {
                    eventList: this.args.model.eventList[x],
                    speaker: a.firstObject ? a.firstObject.name : '',
                };
            });
        }
        this.args.model.participantListAll = participantListAll
        this.args.model.eventListAll = eventListAll
        this.args.model._isVue = true

        return this.args.model
    }
}
