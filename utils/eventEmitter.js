// 事件发布订阅模式
class EventEmitters {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return this;
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) {
            return;
        }

        const callbacks = [...this.events[eventName]];
        for (const callback of callbacks) {
            callback.apply(this, args);
        }
    }

    off(eventName, callback) {
        if (!this.events[eventName]) {
            return this;
        }

        if (!callback) {
            delete this.events[eventName];
            return this;
        }

        const index = this.events[eventName].indexOf(callback);
        if (index > -1) {
            this.events[eventName].splice(index, 1);
        }

        if (this.events[eventName].length === 0) {
            delete this.events[eventName];
        }

        return this;
    }
}