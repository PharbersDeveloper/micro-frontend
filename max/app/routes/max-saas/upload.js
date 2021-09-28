import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service"
import { action } from '@ember/object';

export default class MaxSaasUploadRoute extends Route {
    @service cookies
    @service store
    @service ajax

    queryParams = {
        page: {
            refreshModel: true
        },
        selectedTime: {
            refreshModel: true
        }
    }

	@action
	getCurrentDate() {
		//获取当前时间的时间戳，格式为 2020-10-01
		let currentDate = new Date().getTime()
		let date = new Date(currentDate)
		let y = date.getFullYear()
		let m = date.getMonth() + 1
		m = m < 10 ? ('0' + m) : m;
		let time = y + '-' + m + '-' + '01';
		let currentstamp = time.replace(/-/g, '/');
		let timesTamp = new Date(currentstamp).getTime()
		return timesTamp
	}

    async model(params) {
        const limit = 10
        let page = parseInt( params.page, 10 )
        if ( isNaN( page ) ) {
            page = 0
        }
		let timesTamp = this.getCurrentDate()
        let times = params.selectedTime && params.selectedTime != "undefined" ? params.selectedTime : timesTamp
        let projects =  this.store.query("project",{ "filter[time]": times})
        let jobLogs =  this.store.query("jobLog", {"page[limit]": limit, "page[offset]": page * limit,"sort": "-date"})
		await Promise.all([projects, jobLogs])
        return RSVP.hash({
            projectsData: projects.filter( it => it),
            jobLogs: jobLogs.filter( it => it),
            jobsCount: jobLogs.meta.count,
            page: page,
            _isVue: true
        })
    }
}
