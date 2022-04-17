import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'exel__header';

  toHTML() {
    return `
    <input type="text" class="input" value="New Table" />
    <div class="exel__header-button">
      <div class="button">
        <i class="material-icons">delete_forever</i>
      </div>
      <div class="button">
        <i class="material-icons"> logout </i>
      </div>
    </div>`;
  }
}
