import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentPageService {
  private currentPage: number = 1;
  private currentPageSub = new BehaviorSubject<number>(this.currentPage);

  constructor() {}

  getCurrPage(): BehaviorSubject<number> {
    return this.currentPageSub;
  }

  nextPage(): void {
    this.currentPage++;
    this.currentPageSub.next(this.currentPage);
  }

  prevPage(): void {
    this.currentPage--;
    this.currentPageSub.next(this.currentPage);
  }
}
