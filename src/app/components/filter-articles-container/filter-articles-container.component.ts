import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-articles-container',
  templateUrl: './filter-articles-container.component.html',
  styleUrls: ['./filter-articles-container.component.scss'],
})
export class FilterArticlesContainerComponent {
  onSelect(country: string) {
    console.log(country);
  }
}
