import { Component } from '@angular/core';
import { ThemeServiceService } from './services/theme/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeServiceService) { }
  vm = this;

  title = 'The Hall Of Chris';
  theme: string = this.themeService.getCurrentTheme();

  setTheme(newTheme: string): void {
    this.theme = newTheme;
  }

}
