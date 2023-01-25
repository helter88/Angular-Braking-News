import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-filter-articles-container',
  templateUrl: './filter-articles-container.component.html',
  styleUrls: ['./filter-articles-container.component.scss'],
})
export class FilterArticlesContainerComponent {
  constructor(private localStorage: LocalStorageService) {}
  onSelect(country: string) {
    this.localStorage.saveData('country', `${country}`);
  }
}
