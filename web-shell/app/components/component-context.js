import Component from "@glimmer/component"
import { action } from "@ember/object"
import { tracked } from '@glimmer/tracking';
export default class ComponentContextComponent extends Component {
	@tracked choosed_value
	@tracked options_data
	@tracked menu_data

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
						click_event: function() {
							console.log("sub_item2")
						}
					}
				]
			},
			{
				type: "item",
				text: "item1",
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
