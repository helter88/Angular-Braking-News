import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckInputPageFormatService {
  constructor() {}

  checkFormat(item: string) {
    if (Number(item) > 100) {
      let num = 100;
      return num.toString();
    }
    if (Number(item) < 1) {
      let num = 1;
      return num.toString();
    }
    return item;
  }
}
