export default class Publisher {
    constructor() {
        this.subscribers = [];
    }
    addSubscriber(s) {
        this.subscribers.push(s);
    }
    notifySubscribers(event) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i](event)
        }
    }
}