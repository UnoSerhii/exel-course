import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.nema = options.name || '';
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }
}
