import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

import { ThemeServiceService } from '../services/theme/theme-service.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  vm = this;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeServiceService) {}

  @Output() themeChange = new EventEmitter();

  toggleTheme(): void {
    this.themeService.toggleTheme();
    console.log(this.themeService.getCurrentTheme());
    this.themeChange.emit(this.themeService.getCurrentTheme());
  }
}
