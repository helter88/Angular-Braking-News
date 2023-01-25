import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExtractCountryNameService {
  private countryPointer = {
    cz: 'Czechy',
    de: 'Niemcy',
    pl: 'Polska',
  };

  constructor() {}

  getLongCountryName(countryISO: keyof typeof this.countryPointer) {
    return this.countryPointer[countryISO];
  }
}
