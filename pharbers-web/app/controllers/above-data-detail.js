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
        let image = []
        let participantListAll = []
        let sss = []
        for(let x = 0; x < this.model.imageList.length; x++){
            image[x] = this.model.imageList.filter(it => (this.model.imageIds[x].indexOf(it.id) != -1))
        }
        for(let i=0; i < this.model.participantList.length; i++){
            participantListAll[i] = {participant: this.model.participantList[i], image: image[i][0]}
        }
        for(let x = 0; x < this.model.eventList.length; x++) {
            this.model.eventList[x].speakers.then(a => {
                console.log(a)
            })
        }
        this.allData = { 
            cover: this.model.cover,
            data: this.model.data,
            eventList: this.model.eventList,
            participantList: this.model.participantList,
            galleryShow: this.model.galleryShow,
            galleryList: this.model.galleryList,
            imageList: this.model.imageList,
            participantListAll: participantListAll
        }
        console.log(this.allData)
    }
}
