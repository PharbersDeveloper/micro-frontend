import Service from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class ResourceActionServiceService extends Service {
	@tracked boolChecked = false

	checkStarted() {
		return this.boolChecked
	}
}
