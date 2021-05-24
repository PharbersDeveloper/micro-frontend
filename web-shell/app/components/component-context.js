import Component from "@glimmer/component"
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object"
import { inject as service } from '@ember/service'
export default class ComponentContextComponent extends Component {
	@tracked choosed_value
	@tracked options_data
	@tracked menu_data

	@tracked bpButtonGroupdata
	@tracked tag
	@tracked itemArr
    @tracked buttonText
    @service intl
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
        this.buttonText = this.intl.t("nav.login")
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

	@action
	transferData(element) {
		this.choosed_value = "中文"
		this.options_data = [
			{
				text: "中文",
				second_text: "",
				src: "assets/case.svg",
				click_event: function() {
					console.log("http://www.baidu.com")
				}
			},
			{
				text: "英文",
				second_text: "",
				click_event: function() {
					console.log("http://www.google.com")
				}
			},
			{
				text: "韩文",
				second_text: "",
				click_event: function() {
					console.log("http://www.jd.com")
				}
			}
		]
	}
	
	@action
	transferMenuData() {
		this.menu_data = [
			{
				type: "sub",
				text: "sub1",
				src: "assets/case.svg",
				click_event: function() {
				
				},
				item_data: [
					{
						text: "sub_item1",
						click_event: function() {
							console.log("sub_item1")
						}
					},
					{
						text: "sub_item2",
						src: "assets/case.svg",
						click_event: function() {
							console.log("sub_item2")
						}
					}
				]
			},
			{
				type: "item",
				text: "item1",
				src: "assets/case.svg",
				click_event: function() {
					console.log("item1")
				}
			},
			{
				type: "item",
				text: "item2",
				click_event: function() {
					console.log("item2")
				}
			},
			{
				type: "sub",
				text: "sub2",
				click_event: function() {
				
				},
				item_data: [
					{
						text: "sub_item3",
						click_event: function() {
							console.log("sub_item3")
						}
					}
				]
			}
		]
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
