import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class FlowRoute extends Route {
    @service cookies
    @service ajax
    @service('loading') loadingService;
    @service store
    namespace = ENV.namespace

    beforeModel() {
        let cookies = this.get( "cookies" )

        if ( !cookies.read( "access_token" ) ) {
            this.transitionTo( "index" )
        }
        this.loadingService.loading.style.display = 'flex'
    }
    queryParams = {
        projectName: {
            refreshModel: true
        },
        projectId: {
            refreshModel: true
        },
        flowVersion: {
            refreshModel: true
        }
    }
    async model(params) {
        // let targetDataset = await this.store.peekRecord('dataset', params.datasetId)
        // let targetSchema = JSON.parse(targetDataset.schema)
        let schemaArr = []
        // targetSchema.forEach(item => {
        //     schemaArr.push(item.des)
        // })

        this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
        return RSVP.hash( {
            projectName: params.projectName,
            projectId: params.projectId,
            schemaArr: schemaArr,
            datasetName: params.datasetName,
            database: 'default',
            _isVue: true
        } )
    }
}
