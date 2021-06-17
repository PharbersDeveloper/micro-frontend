import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class BoyunhuiRoute extends Route {
    @service store;

    model(params) {
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        const id = params.boyunhui_id
        // const x = this.store.findRecord('activity', id, {include: 'logo,gallery,attachments,agendas,agendas.agendas,agendas.agendas.speakers,agendas.agendas.speakers.avatar'})
        const activityList = this.store.query( "activity",  { 'filter[activityType]': "boyunhui", 'filter[language]': lang, "page[limit]": 1, "page[offset]": id,'sort': "-startDate",include: 'gallery'} ) 
        const reportList = this.store.query("report", { "filter[language]": lang, "page[limit]": 1, "page[offset]": id, 'sort': "-date", include: "cover"})
        //get zones
        const zoneList = activityList.then(x => {
            const zidsArr = x.map(activity => {
                return activity.hasMany( "agendas" ).ids()
            })
            const ids = [...new Set(zidsArr.reduce((acc, val) => acc.concat(val), []))]
            return this.store.query("zone", { 'ids[]': ids })
        })
        //get events
        const eventList = zoneList.then(x => {
            const eidArr = x.map(zone => {
                return zone.hasMany( "agendas" ).ids()
            })
            const ids = [...new Set(eidArr.reduce((acc, val) => acc.concat(val), []))]
            const eids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")            

            return this.store.query("event", {'ids[]': ids})
        })

        //get participant
        const participantList = eventList.then(x => {
            const pidArr = x.map(event => {
                return event.hasMany( "speakers" ).ids()
            })
            const ids = [...new Set(pidArr.reduce((acc, val) => acc.concat(val), []))]
            const pids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

            return this.store.query("participant", {'ids[]': ids })
        })

        //get days
        const activityDays = zoneList.then(x => {
            let days = x.map(it => {
                return it.subTitle
            })
            return  [...new Set(days.reduce((acc, val) => acc.concat(val), []))]
        })
        // // get images
        const imageList = participantList.then(x => {
            const idArr = x.map(event => {
                return event.belongsTo( "avatar" ).id()
            })
            const ids = [...new Set(idArr.reduce((acc, val) => acc.concat(val), []))].filter( x => x)
            const imageids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

            return this.store.query("image", {'ids[]': ids })
        })

        // get gallery
        const galleryList = activityList.then(x => {
            
            const idArr = x.map(activity => {
                return activity.hasMany( "gallery" ).ids()
            })
            const ids = [...new Set(idArr.reduce((acc, val) => acc.concat(val), []))]
            const imageids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

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

        const cooperationList = activityList.then(x => {
            const cidsArr = x.map(activity => {
                return activity.hasMany( "partners" ).ids()
            })
            // console.log("cccc", cidsArr)
            const ids = [...new Set(cidsArr.reduce((acc, val) => acc.concat(val), []))]
            const cids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

            return this.store.query("cooperation", { 'ids[]': ids })
        })

        const cooperationLogoList = cooperationList.then(x => {
            const cidsArr = x.map(cooperation => {
                return cooperation.belongsTo( "logo" ).id()
            })
            const ids = [...new Set(cidsArr.reduce((acc, val) => acc.concat(val), []))]
            const cids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",")

            return this.store.query("image", { 'ids[]': ids })
            
        })

        return hash({
            activitys: activityList.then(x =>  x.filter(it => it.language === lang )),
            reportList: reportList.then(x => x.filter(it => it.language === lang)),
            imageList: imageList,
            eventList: eventList.then(x =>  x.filter(it => it.language === 1 )),
            eventListEN: eventList.then(x =>  x.filter(it => it.language === 0 )),
            participantList: participantList.then(x =>  x.filter(it => it.language === lang)),
            activityDays: activityDays,
            cooperationListA: cooperationList.then(x => x.filter(it => it.companyType === "指导单位" && it.language === 1)),
            cooperationListB: cooperationList.then(x => x.filter(it => it.companyType === "主办单位" && it.language === 1)),
            cooperationLogoList: cooperationLogoList,
            galleryList: galleryList.then(x => x.filter(it => it.path != "")),
            galleryShow: galleryShow,
            index: id
        })
    }
    setupController(controller, model){
        controller.set('model', model);
        controller.set('index', model.index);
    }
}
