import { Component } from '@angular/core';
import { CheckInputPageFormatService } from 'src/app/services/check-input-page-format.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-filter-articles-container',
  templateUrl: './filter-articles-container.component.html',
  styleUrls: ['./filter-articles-container.component.scss'],
})
export class FilterArticlesContainerComponent {
  constructor(
    private localStorage: LocalStorageService,
    private checkInput: CheckInputPageFormatService
  ) {}
  onSelect(country: string) {
    this.localStorage.saveData('country', `${country}`);
  }
  onInputChange(inputPage: string) {
    inputPage = this.checkInput.checkFormat(inputPage);

    this.localStorage.saveData('itemsOnPage', `${inputPage}`);
  }
}
