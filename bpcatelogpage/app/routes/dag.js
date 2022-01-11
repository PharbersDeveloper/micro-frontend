import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DagRoute extends Route {
    @service store
    @service cookies
    @service('loading') loadingService;
    async model( params ) {
        let numShow = {}
        let promiseList = []
        // project基本信息
        let projectDetail = this.store.findRecord( "project", params.project_id)
        // 目前只有数据集和脚本的num
        const url = "https://apiv2.pharbers.com/phgetnumber"
        const accessToken = this.cookies.read( "access_token" )
        let body = {
            "tableName": "dataset",
            "projectId": params.project_id
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        const nums = fetch(url, options).then(res=>res.json())
        // actions列表
        const acurl = "https://apiv2.pharbers.com/phdydatasource/query"
        let acbody = {
            "table": "action",
            "conditions": {
                "projectId": ["=", params.project_id]
            },
            "limit": 1000,
            "start_key": {}
        }
        let acoptions = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/json; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(acbody)
        }
        const actions = fetch(acurl, acoptions).then(res=>res.json())
        promiseList.push(projectDetail, nums, actions)
        let results = await Promise.all(promiseList)
        let numsArr = results[1]
        console.log(results)
        numShow.dataset = numsArr.dataset ? numsArr.dataset : 0
        numShow.flow = numsArr.dagconf ? numsArr.dagconf : 0
        numShow.analysis = numsArr.analysis ? numsArr.length : 0
        numShow.model = numsArr.models ? numsArr.length : 0
        numShow.notebook = numsArr.notebooks ? numsArr.length : 0
        numShow.dashBoard = numsArr.dashBoards ? numsArr.length : 0
        numShow.wiki = numsArr.wiki ? numsArr.length : 0
        this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
        return RSVP.hash({
            projectDetail: results[0],
            numShow: numShow,
            actionsArr: results[2].data.filter(it => it["attributes"]["job-cat"] !== "dag_refresh"),
            _isVue: true
        })
    }
}
