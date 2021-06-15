import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class AboveDataDetailController extends Controller {
    @tracked allData = {};
    init() {
        super.init(...arguments)

        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    }

    @action
	transferData() {
        this.allData = { 
            cover: this.model.cover,
            data: this.model.data,
            eventList: this.model.eventList,
            participantList: this.model.participantList,
            galleryShow: this.model.galleryShow,
            galleryList: this.model.galleryList,
            imageList: this.model.imageList
        }
        console.log(this.allData)
    }
}
