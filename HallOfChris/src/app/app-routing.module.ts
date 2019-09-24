import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { InterestCodeComponent } from './interest-code/interest-code.component';
import { InterestMusicComponent } from './interest-music/interest-music.component';
import { InterestCommunityComponent } from './interest-community/interest-community.component';
import { PageResumeComponent } from './page-resume/page-resume.component';
import { PageAboutComponent } from './page-about/page-about.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContentComponent
  },
  {
    path: 'interest_code',
    component: InterestCodeComponent
  },
  {
    path: 'interest_music',
    component: InterestMusicComponent
  },
  {
    path: 'interest_community',
    component: InterestCommunityComponent
  },
  {
    path: 'resume',
    component: PageResumeComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
