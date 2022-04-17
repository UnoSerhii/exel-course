import { capitalize } from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root ptovided for DomListener!`);
    }
    this.$root = $root,
    this.listeners = listeners;
  }

  initDomListeners() {
    // console.log(this.listeners);
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`Method ${method} is not implented
        in ${name} Component`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
