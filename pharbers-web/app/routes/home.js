/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { action } from '@ember/object';

export default class HomeRoute extends Route {
    @service store;
    model() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        // 请求数据
        const activityList = this.store.query("activity", { 'sort': "-startDate", "page[limit]": 6,"page[offset]": 0})
        const galleryList = activityList.then(x => {
            const idArr = x.map(activity => {
                return activity.hasMany( "gallery" ).ids()
            })
            // console.log('idArr',idArr)
            const ids = [...new Set(idArr.reduce((acc, val) => acc.concat(val), []))]
            const imageids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",") 
        
            const condi0 = "(id,:in,[" + imageids + "])"
            const cond1 = "(tag,:eq,`cover`)"
            const cond = "(:and," + condi0 + "," + cond1 + ")"
            // 如何阻止ember请求relationship的数据
      
            return this.store.query("image", { "filter[tag]": "cover" })
        })
        //中文下活动(筛选后的)的gallery的id数组
        const galleryIds = activityList.then(x => {
            const isArr = x.filter(it => it.language === 1 )
            const idArr = isArr.map(activity => {
                return activity.hasMany( "gallery" ).ids()
            })

            return idArr
        })
        const logosList = activityList.then(x => {
            const idArr = x.map(activity => {
                return activity.belongsTo( "logo" ).id()
            })
            const ids = [...new Set(idArr.reduce((acc, val) => acc.concat(val), []))].filter(it => it)
            const imageids = ids.map( x => {
                return "`" + `${x}` + "`"
            }).join(",") 
      
            return this.store.query("image", {'ids[]': ids })
        })

        const reportsList = this.store.query("report", { 'sort': "-date",'page[limit]': 2})

        const images =  reportsList.then( x => {            
            const idArr = x.filter(y => y.language === 1).map(r => {
                return r.belongsTo( "cover" ).id()
            })
            return this.store.findRecord( "image", idArr[0] )
        })
        return {
            galleryIds: galleryIds,
            activityListAll: activityList,
            galleryList: galleryList.then(x => x.filter(it => it )),
            logosList: logosList,
            images: images
        }
    }
}
