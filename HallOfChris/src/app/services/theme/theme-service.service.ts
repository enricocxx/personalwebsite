import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  darkTheme = 'theme-dark';
  lightTheme = 'theme-light';

  currentTheme: string = this.darkTheme;

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === this.darkTheme ? this.lightTheme : this.darkTheme;
  }

  constructor() { }
}
