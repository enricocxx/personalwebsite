import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './mat-module';
import { FormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChrisComponent } from './chris/chris.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainContentComponent } from './main-content/main-content.component';
import { InterestCodeComponent } from './interest-code/interest-code.component';
import { InterestMusicComponent } from './interest-music/interest-music.component';
import { InterestCommunityComponent } from './interest-community/interest-community.component';
import { PageResumeComponent } from './page-resume/page-resume.component';
import { PageAboutComponent } from './page-about/page-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ChrisComponent,
    MainNavComponent,
    MainContentComponent,
    InterestCodeComponent,
    InterestMusicComponent,
    InterestCommunityComponent,
    PageResumeComponent,
    PageAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
