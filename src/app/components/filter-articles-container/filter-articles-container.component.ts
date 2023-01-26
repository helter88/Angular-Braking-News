import { Component, OnInit } from '@angular/core';
import { CheckInputPageFormatService } from 'src/app/services/check-input-page-format.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-filter-articles-container',
  templateUrl: './filter-articles-container.component.html',
  styleUrls: ['./filter-articles-container.component.scss'],
})
export class FilterArticlesContainerComponent implements OnInit {
  countrySelected: string | undefined;
  valueInput: string | undefined;

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

  ngOnInit(): void {
    this.localStorage.getDataStream('country').subscribe((country) => {
      if (!country) {
        this.countrySelected = 'pl';
      } else {
        this.countrySelected = country;
      }
    });
    this.localStorage.getDataStream('itemsOnPage').subscribe((page) => {
      if (!page) {
        this.valueInput = '10';
      } else {
        this.valueInput = page;
      }
    });
  }
}
