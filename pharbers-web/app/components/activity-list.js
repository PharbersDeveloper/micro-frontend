import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ActivityListComponent extends Component {
    @service router

    @action
    listener(e) {
        switch (e.detail[0].args.callback) {
            case "linkToPage":
                if (e.detail[0].args.param.index != undefined) {
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
        let gallery = [];
        let dataAll = [];
        this.tabIndex = 0;
        for (let x = 0; x < this.args.model.galleryList.length; x++) {
            gallery[x] = this.args.model.galleryList.filter(
                (it) => this.args.model.galleryIds[x].indexOf(it.id) != -1
            );
        }
        for (let i = 0; i < this.args.model.data.length; i++) {
            dataAll[i] = {
                activity: this.args.model.data[i],
                image: gallery[i][0],
            };
        }
        this.allData = {
            byhData: dataAll.filter((it) => it.activity.activityType === 'boyunhui'),
            AboveData: dataAll.filter(
                (it) => it.activity.activityType === 'Above Data'
            ),
            industryData: dataAll.filter(
                (it) => it.activity.activityType === 'industry'
            ),
        };
        this.allData._isVue = true
        return this.allData
    }
}
