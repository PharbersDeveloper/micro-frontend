import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BoyunhuiComponent extends Component {
    @service router
    @action
	listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                if(e.detail[0].args.param.index != undefined) {
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
        const nameArr = ['郭云沛', '梁万年', '胡大洋', '王丽敏', '蒋孙明', '王威', '庞成林', '张华', '连春玲', '徐海瑛', '张文杰', '任波', '颜国伟', '薛林桐', '陆鹏', '刘运霆', '赵东锷', '姚滇', '王锐', '罗志勇', '黄奕', '张志强', '王桢', '李勇', '黄靖昱', '何树真', '吴谨伊', '李贤', '王兴国', '周生来', '舒展', '赵子昂']

        const sortFunc = (propName, referArr) => {
            return (prev, next) => {
                return referArr.indexOf(prev[propName]) - referArr.indexOf(next[propName])
            }
        }
        element.allData = this.calAllData
        const nameList = element.allData.participants.filter(it => {
            return it.avatar.get('path') != undefined
        })
        nameList.sort(sortFunc('name', nameArr))
        element.allData.participantsImageList = nameList
        const logoArr = ["cphmra", "法伯科技", "中国县域医院院长联盟"]
        element.allData.cooperationListB.sort(sortFunc('name', logoArr))
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}

    get calAllData() {
        this.args.model._isVue = true
        return this.args.model
    }
}
