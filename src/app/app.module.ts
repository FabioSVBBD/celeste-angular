import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent as TastingMenuHome } from './tasting-journey/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { HomeLeavesComponent } from './components/home-leaves/home-leaves.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuBoxComponent } from './components/menu-box/menu-box.component';
import { OrderToolComponent } from './components/order-tool/order-tool.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TastingMenuHome,
    TitleComponent,
    HomeLeavesComponent,
    ButtonComponent,
    MenuItemComponent,
    MenuBoxComponent,
    OrderToolComponent,
    ConfirmPageComponent,
    SummaryPageComponent,
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
