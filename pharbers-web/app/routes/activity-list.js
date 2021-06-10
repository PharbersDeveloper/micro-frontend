import Route from '@ember/routing/route';
import { hash } from 'rsvp'
import { inject as service } from '@ember/service';

export default class ActivityListRoute extends Route {
    @service store;

    beforeModel() {
        this.controllerFor('application').set('inverse', true)
    }
    model() {
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        const activityList = this.store.query("activity", { 'filter[language]': lang,'sort': "-startDate" })
        const galleryList = activityList.then(x => {
            const idArr = x.map(activity => {
                return activity.hasMany( "gallery" ).ids()
            })
            const ids = [...new Set(idArr.reduce((acc, val) => acc.concat(val), []))]
            const imageids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")
      
            const condi0 = "(id,:in,[" + imageids + "])"
            const cond1 = "(tag,:eq,`cover`)"
            const cond = "(:and," + condi0 + "," + cond1 + ")"
      
            return this.store.query("image", {'filter[tag]': 'cover' })
        })
        const galleryIds = activityList.then(x => {
            const isArr = x.filter(it => it.language === lang )
            const idArr = isArr.map(activity => {
                return activity.hasMany( "gallery" ).ids()
            })
        
            return idArr
        })
        return hash({
            galleryIds: galleryIds,
            data: activityList.then(x => x.filter( it => it.language === lang)),
            galleryList: galleryList
        })
    }
}
