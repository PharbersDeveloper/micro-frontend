import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"

export default class TestRoute extends Route {
    @service("iot-service") iot; 

    async model() {
        this.iot.mqttConnect((topic, payload) => {
            console.info("Alex")
        })
        return {}
    }
}
