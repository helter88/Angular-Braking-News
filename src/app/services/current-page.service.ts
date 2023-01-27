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

  getCurrPage(): BehaviorSubject<number> {
    return this.currentPageSub;
  }

  nextPage(): void {
    ++this.currentPage;
    this.currentPageSub.next(this.currentPage);
  }

  prevPage(): void {
    --this.currentPage;
    this.currentPageSub.next(this.currentPage);
  }

  resetPage(): void {
    this.currentPage = 1;
    this.currentPageSub.next(this.currentPage);
  }
}
