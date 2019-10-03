import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './mat-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { QuillModule } from 'ngx-quill';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase/firebase.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChrisComponent } from './chris/chris.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainContentComponent } from './main-content/main-content.component';
import { InterestCodeComponent } from './interest-code/interest-code.component';
import { InterestMusicComponent } from './interest-music/interest-music.component';
import { InterestCommunityComponent } from './interest-community/interest-community.component';
import { PageResumeComponent } from './page-resume/page-resume.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { FooterComponent } from './footer/footer.component';
import { InterestCardsComponent } from './interest-cards/interest-cards.component';
import { NewBlogpostComponent } from './new-blogpost/new-blogpost.component';
import { DetailBlogpostComponent } from './detail-blogpost/detail-blogpost.component';
import { HomeBlogpostComponent } from './home-blogpost/home-blogpost.component';

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
    PageAboutComponent,
    FooterComponent,
    InterestCardsComponent
    NewBlogpostComponent,
    DetailBlogpostComponent,
    HomeBlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatCarouselModule,
    NgbModule,
    NgxGistModule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
