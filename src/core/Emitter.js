export class Emitter {
  constructor() {
    this.listeners = {};
  }


  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter((listener) => listener !== fn);
    };
  }
}


// const emitter = new Emitter();

// emitter.subscribe('serhio', (data) => console.log('Sub', data));
// emitter.emit('serhio', 28);

// setTimeout(() => {
//   emitter.emit('serhio', 'After 2 seconds');
// }, 2000);

// setTimeout(() => {
//   emitter.emit('serhio', 'After 3 seconds');
// }, 3000);

// setTimeout(() => {
//   emitter.emit('serhio', 'After 4 seconds');
// }, 4000);
