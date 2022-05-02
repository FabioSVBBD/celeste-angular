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
import { GoldBoxComponent } from './components/gold-box/gold-box.component';
import { OrderToolComponent } from './components/order-tool/order-tool.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { ChipComponent } from './components/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TastingMenuHome,
    TitleComponent,
    HomeLeavesComponent,
    ButtonComponent,
    MenuItemComponent,
    GoldBoxComponent,
    OrderToolComponent,
    ConfirmPageComponent,
    SummaryPageComponent,
    OrderItemComponent,
    ChipComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'tasting-menu', component: TastingMenuHome },
      { path: 'confirm', component: ConfirmPageComponent },
      { path: 'summary', component: SummaryPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
