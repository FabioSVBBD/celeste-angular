import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent as TastingMenuHome } from './tasting-journey/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { HomeLeavesComponent } from './components/home-leaves/home-leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TastingMenuHome,
    TitleComponent,
    HomeLeavesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'tasting-menu', component: TastingMenuHome },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
