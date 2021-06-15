import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class IndustryActivityDetailController extends Controller {
    @tracked allData = {};
    init() {
        super.init(...arguments)

        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    }

    @action
	transferData() {
        let image = []
        let eventAll = []
        for(let x = 0; x < this.model.imageList.length; x++){
            image[x] = this.model.imageList.filter(it => (this.model.imageIds[x].indexOf(it.id) != -1))
        }
        for(let i=0; i < this.model.eventList.length; i++){
            eventAll[i] = {event: this.model.eventList[i], image: image[i][0], speaker: this.model.participantList[i].name}
        }
        this.allData = { 
            data: this.model.data,
            eventAll: eventAll,
            participantList: this.model.participantList,
            galleryShow: this.model.galleryShow,
            galleryList: this.model.galleryList,
            imageList: this.model.imageList
        }
        console.log(this.allData)
    }
}
