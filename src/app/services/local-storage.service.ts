import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private dataSubject = new Subject<string>();
  constructor() {}

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    this.dataSubject.next(value);
  }

  getStaticData(key: string) {
    return localStorage.getItem(key);
  }

  getDynamicChanges(key: string) {
    return this.dataSubject.asObservable();
  }
}
