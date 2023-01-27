import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentPageService {
  private currentPage: number = 1;

  constructor() {}

  getCurrPage(): number {
    return this.currentPage;
  }

  nextPage(): void {
    this.currentPage++;
  }

  prevPage(): void {
    this.currentPage--;
  }
}
