import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
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
  private isMaxPage = new BehaviorSubject<boolean>(false);
  private isMinPage = new BehaviorSubject<boolean>(true);
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
    if (this.pagesOnSite * (this.currentPage + 1) >= this.totalFromAPI) {
      this.isMaxPage.next(true);
    }
    if (this.pagesOnSite * this.currentPage >= this.totalFromAPI) {
      return;
    } else {
      this.currentPage++;
      this.isMinPage.next(false);
      this.currentPageSub.next(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage - 1 === 1) {
      this.isMinPage.next(true);
    }
    if (this.currentPage === 1) {
      return;
    } else {
      this.currentPage--;
      this.isMaxPage.next(false);
      this.currentPageSub.next(this.currentPage);
    }
  }

  getIsMaxPage(): BehaviorSubject<boolean> {
    return this.isMaxPage;
  }

  getIsMinPage(): BehaviorSubject<boolean> {
    return this.isMinPage;
  }
}
