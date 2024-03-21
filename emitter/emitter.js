"use strict";

module.exports = class EventEmitter {
  constructor() {
    this.event_map = {};
  }

  on(eventName, callback) {
    let handler = callback.bind();
    if (this.event_map[eventName]) {
      this.event_map[eventName].push(handler);
    } else {
      this.event_map[eventName] = [handler];
    }
    return this.off.bind(this, eventName, handler);
  }

  off(eventName, callback) {
    for (let e in this.event_map) {
      if (e == eventName) {
        for (let i = this.event_map[e].length - 1; i >= 0; i--) {
          if (callback == this.event_map[e][i]) {
            this.event_map[e].splice(i, 1);
          }
        }
      }
    }
  }

  trigger(eventName, data) {
    for (let e in this.event_map) {
      if (e == eventName) {
        let handler;

        for (let i = 0; i < this.event_map[e].length; i++) {
          handler = this.event_map[e][i];
          handler(data);
        }
      }
    }
  }
};
