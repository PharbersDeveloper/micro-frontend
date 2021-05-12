import Component from "@glimmer/component"
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object"

export default class ComponentContextComponent extends Component {
	@tracked bpButtonGroupdata
	@tracked tag
	@tracked itemArr
	@action
	listener(e) {
		// coloring ember body
		const newColor = getRandomColor()
		document.body.style.backgroundColor = newColor
		// passing color value to react context via props
		const webcomponent = e.target
		webcomponent.color = newColor
		webcomponent.msg_title = { test: "alfred" }
		console.log("alfred listener action")
	}

	@action
	registerListener(element) {
		element.addEventListener("click", this.listener)
		element.addEventListener("dbclick", this.listener)
		this.bpButtonGroupdata = [
			{
				text: "222"
			},
			{
				text: "aaa",
				active: true
			},
			{
				text: "wode222"
			}
		]
		this.itemArr = [
			"https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-27/297f5edb1e984613083a2d3cc0c5bb36.png",
			"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/head1200_B.png"
		]
		this.tag = "aaa"
		element.testobject = { a: 1, b: 2 }
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("example-event", this.listener)
		element.removeEventListener("example-nest-event", this.listener)
	}
}

function getRandomColor() {
	const letters = "0123456789ABCDEF"
	let color = "#"
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
