import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: LandingPageComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
