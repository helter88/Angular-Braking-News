import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { SelectedResponse } from '../models/article';
import { ArticlesService } from './articles.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentPageService {
  private currentPage: number = 1;
  private currentPageSub = new BehaviorSubject<number>(this.currentPage);
  private totalFromAPI: number = 0;
  private pagesOnSite: number = 1;
  constructor(
    private articles: ArticlesService,
    private locStorage: LocalStorageService
  ) {
    this.articles
      .getArticles()
      .pipe(map((resp: SelectedResponse) => resp.totalResults))
      .subscribe((total) => {
        this.totalFromAPI = total;
      });

    this.locStorage.getDataStream('itemsOnPage').subscribe((page) => {
      this.pagesOnSite = Number(page);
    });
  }

  getCurrPage(): BehaviorSubject<number> {
    return this.currentPageSub;
  }

  nextPage(): void {
    console.log('total from API', this.totalFromAPI);
    if (this.pagesOnSite * this.currentPage >= this.totalFromAPI) {
      return;
    } else {
      this.currentPage++;
      this.currentPageSub.next(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage === 1) {
      return;
    } else {
      this.currentPage--;
      this.currentPageSub.next(this.currentPage);
    }
  }
}
