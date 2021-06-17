import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class ActivityListController extends Controller {
    @tracked allData = {};
    init() {
        super.init(...arguments)

        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    }

    @action
	transferData() {
        let gallery = []
        let dataAll = []
        for(let x = 0; x < this.model.galleryList.length; x++){
            gallery[x] = this.model.galleryList.filter(it => (this.model.galleryIds[x].indexOf(it.id) != -1))
        }
        for(let i=0; i < this.model.data.length; i++){
            dataAll[i] = {
                activity: this.model.data[i],
                image: gallery[i][0]
            }
        }
		this.allData = {
            byhData: dataAll.filter(it => it.activity.activityType === "boyunhui"),
            AboveData: dataAll.filter(it => it.activity.activityType === "Above Data"),
            industryData: dataAll.filter(it => it.activity.activityType === "industry")
        }
	}

    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action
    linkToActivity(data) {
        var str = data.detail[0]
        let index = str.lastIndexOf("/")
        let url = str.substring(0, index)
        let param = str.substring(index+1, str.length)
        this.transitionToRoute(url, param)
    }
}
