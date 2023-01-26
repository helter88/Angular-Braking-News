import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface LocalStorageData {
  country: string | null;
  itemsOnPage: string | null;
  [key: string]: string | null;
}

const startingVal = {
  country: localStorage.getItem('country'),
  itemsOnPage: localStorage.getItem('itemsOnPage'),
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private dataSubject = new BehaviorSubject<LocalStorageData>(startingVal);
  constructor() {}

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    const currData = this.dataSubject.getValue();
    this.dataSubject.next({
      ...currData,
      [key]: value,
    });
  }

  getDataStream(key: string) {
    return this.dataSubject.pipe(map((data) => data[key]));
  }
}
