import Component from "@glimmer/component"
import { tracked } from "@glimmer/tracking"

export default class ShellComponentComponent extends Component {
	/**
	 * 3. 动态加载Component, 这里的作用是将事件利用Event隔离
	 */
	@tracked engine = "web-component"
}
