import { Component, OnInit } from '@angular/core';
import { CheckInputPageFormatService } from 'src/app/services/check-input-page-format.service';
import { CurrentPageService } from 'src/app/services/current-page.service';
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
    private checkInput: CheckInputPageFormatService,
    private currPage: CurrentPageService
  ) {}
  onSelect(country: string) {
    this.localStorage.saveData('country', `${country}`);
    this.currPage.resetPage();
  }
  onInputChange(inputPage: string) {
    inputPage = this.checkInput.checkFormat(inputPage);

    this.localStorage.saveData('itemsOnPage', `${inputPage}`);
    this.currPage.resetPage();
  }

  ngOnInit(): void {
    this.localStorage.getDataStream('country').subscribe((country) => {
      this.countrySelected = country;
    });
    this.localStorage.getDataStream('itemsOnPage').subscribe((page) => {
      this.valueInput = page;
    });
  }
}
