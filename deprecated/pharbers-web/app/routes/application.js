import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    model() {
        let originalSetItem = localStorage.setItem;

        localStorage.setItem = function (key, newValue) {
            let event = new Event('setItemEvent');
            event.key = key;
            event.newValue = newValue;
            window.dispatchEvent(event);
            originalSetItem.apply(this, arguments);
        }
    }
}