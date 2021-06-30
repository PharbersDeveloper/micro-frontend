/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
// import { action } from '@ember/object';

export default class HomeRoute extends Route {
    @service store;
    beforeModel() {
        this.controllerFor('application').set('inverse', false)
    }
    async model() {
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        // let activityList = this.store.peekAll("activity")
        // if (activityList.length == 0){
        //     activityList = await this.store.query("activity", { 'sort': "-startDate", "page[limit]": 3,"page[offset]": 0, "filter[language]": lang, include: "logo,gallery" })
        //     reportsList = await this.store.query("report", { 'sort': "-date",'page[limit]': 1, "filter[language]": lang, include: "cover"})
        // } else {
        //     reportsList = this.store.peekAll("report")
        // }
        
        let activityList = await this.store.query("activity", { 'sort': "-startDate", "page[limit]": 3,"page[offset]": 0, "filter[language]": lang, include: "logo,gallery" })

        let reportsList = await this.store.query("report", { 'sort': "-date",'page[limit]': 1, "filter[language]": lang, include: "cover"})
        
        return {
            activityData: activityList.filter(it => it.language === lang),
            reportsList: reportsList.filter(it => it.language === lang)
        }

        // return Promise.all([activityList, reportsList]).then(values =>{
        //     const activityArr = values[0].filter(it => it.language === lang)
        //     activityArr.forEach((element,index) => {
        //         Promise.all([element.logo, element.gallery])
        //         // .then(links => {
        //             // let obj = {
        //             //     activityType: element.activityType,
        //             //     city: element.city,
        //             //     contentDesc: element.contentDesc,
        //             //     contentTitle: element.contentTitle,
        //             //     currentState: element.currentState,
        //             //     endDate: element.endDate,
        //             //     language: element.language,
        //             //     location: element.location,
        //             //     subTitle: element.subTitle,
        //             //     title: element.title,
        //             //     id: element.id,
        //             //     logo: links[0],
        //             //     gallery: links[1],
        //             //     startDate: element.startDate
        //             // }
        //             // activityData[index] = obj
        //         // })
        //     });
        // })

        // return RSVP.hash({
        //     activityData: activityList.then(x => x.filter(it => it.language === lang)),
        //     reportsList: reportsList.then(x => x.filter(it => it.language === lang))
        // })
    }
}
