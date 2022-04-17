class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
    }
    return this.$el.outerHTML.trim();
  }
  clear() {
    this.html('');
    return this;
  }

  on(evenType, callback) {
    this.$el.addEventListener(evenType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) {
    if (Element.prototype.append) {
      if (node instanceof Dom) {
        node = node.$el;
      }
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    // this.$el.append(node.$el);
  }
}

// $('div').html('<h1>Test</h1>').clear();

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
