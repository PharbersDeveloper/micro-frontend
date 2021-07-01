import Component from '@glimmer/component';
import { action } from '@ember/object'

export default class HomeComponentComponent extends Component {
    @action
	listener(e) {
        debugger
		// coloring ember body
		// const newColor = getRandomColor()
		// document.body.style.backgroundColor = newColor
		// // passing color value to react context via props
		// const webcomponent = e.target
		// webcomponent.color = newColor
		// webcomponent.msg_title = { test: "alfred" }
		// console.log("alfred listener action")
	}

    @action
	registerListener(element) {
        debugger
		element.addEventListener("linkToPage", this.listener)
	}

	@action
	unregisterListener(element) {
        debugger
		element.removeEventListener("example-event", this.listener)
		element.removeEventListener("example-nest-event", this.listener)
	}

    // @action
    // linkToPage(data) {
    //     this.transitionToRoute(data.detail[0])
    // }

    // @action 
    // downloadReport(data) {
    //     this.transitionToRoute(data.detail[0], 0)
    // }

    // @action
    // toActivityPage(data) {
    //     let curType = data.detail[0],
    //         id = data.detail[1]
        
    //     this.transitionToRoute(curType, 0)
    // }
}
