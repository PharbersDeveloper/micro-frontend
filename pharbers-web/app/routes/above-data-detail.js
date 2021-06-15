import Route from '@ember/routing/route';
import { hash } from 'rsvp'
import { inject as service } from '@ember/service';

export default class AboveDataDetailRoute extends Route {
    @service store;

    beforeModel() {
        this.controllerFor('application').set('inverse', true)
    }
    model(params) {
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        const id = params.activity_id
        // filter activity type
        const activityList = this.store.query( "activity",  { 'filter[activityType]': "Above Data" ,'filter[language]': lang, "page[limit]": 1, "page[offset]": id,'sort': "-startDate", include: "agendas"} ) 
        
        // get zones
        const zoneList = activityList.then(x => {
            const zidsArr = x.map(activity => {
                return activity.hasMany( "agendas" ).ids()
            })
            const ids = [...new Set(zidsArr.reduce((acc, val) => acc.concat(val), []))]
            const zids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

            return this.store.queryRecord("zone", { 'ids[]': ids })
        })
        
        // get events
        const eventList = zoneList.then(x => {
            // const eidArr = x.map(zone => {
            //     return zone.hasMany( "agendas" ).ids()
            // })
            const eidArr = x.hasMany( "agendas" ).ids()
            const ids = [...new Set(eidArr.reduce((acc, val) => acc.concat(val), []))]
            const eids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

            return this.store.query("event", {'ids[]': ids })
        })
        // get participant
        const participantList = eventList.then(x => {
            const pidArr = x.map(event => {
                return event.hasMany( "speakers" ).ids()
            })
            const ids = [...new Set(pidArr.reduce((acc, val) => acc.concat(val), []))]
            const pids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")
            return this.store.query("participant", {'ids[]': ids})
        })
        // get images
        const imageList = participantList.then(x => {
            const idArr = x.map(event => {
                return event.belongsTo('avatar').id()
            })
            return this.store.query("image", {'ids[]': idArr })
        })

        // get gallery
        const galleryList = activityList.then(x => {
            const idArr = x.map(activity => {
                return activity.hasMany( "gallery" ).ids()
            })
            const ids = [...new Set(idArr.reduce((acc, val) => acc.concat(val), []))]
            return this.store.query("image", {'ids[]': ids })
        })
        // get gallery show,six photos
        const galleryShow = galleryList.then(x => {
            let obj = {}
            x.filter( function(ele) {
                switch (ele.tag) {
                    case 'galleryshow-a':
                        obj['a'] = ele.path
                        break;
                    case 'galleryshow-b':
                        obj['b'] = ele.path
                        break;
                    case 'galleryshow-c':
                        obj['c'] = ele.path
                        break;
                    case 'galleryshow-d':
                        obj['d'] = ele.path
                        break;
                    case 'galleryshow-e':
                        obj['e'] = ele.path
                        break;
                    case 'galleryshow-f':
                        obj['f'] = ele.path
                        break;
                    default:
                        break;
                }
            })
            return [obj]
        })
        return hash({
            cover: galleryList.then(x => x.find(it => it.tag === "cover")),
            data: activityList.then(x =>  x.filter(it => it.language === lang )),
            agendas: zoneList,
            eventList: eventList.then(x => x.filter(it => it.title != "")),
            participantList: participantList.then(x =>  x.filter(it => it.language === lang )),
            imageList: imageList.then(x => x.filter(it => it.path != "")),
            galleryList: galleryList.then(x => x.filter(it => it.path != "")),
            galleryShow: galleryShow,
            index: id
        })
    }
}
