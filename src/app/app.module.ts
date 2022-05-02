import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/common/landing-page/landing-page.component';
import { HomeComponent as TastingMenuHome } from './pages/tasting-journey/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { HomeLeavesComponent } from './components/home-leaves/home-leaves.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { GoldBoxComponent } from './components/gold-box/gold-box.component';
import { OrderToolComponent } from './components/order-tool/order-tool.component';
import { ConfirmPageComponent } from './pages/common/confirm-page/confirm-page.component';
import { SummaryPageComponent } from './pages/common/summary-page/summary-page.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { ChipComponent } from './components/chip/chip.component';
import { ConclusionPageComponent } from './pages/common/conclusion-page/conclusion-page.component';
import { ConclusionLeavesComponent } from './components/conclusion-leaves/conclusion-leaves.component';
import { HomeComponent as CarteMenuHome } from './pages/carte-journey/home/home.component';

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
    ConclusionPageComponent,
    ConclusionLeavesComponent,
    CarteMenuHome,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'tasting-menu', component: TastingMenuHome },
      { path: 'a-la-carte', component: CarteMenuHome },
      { path: 'confirm', component: ConfirmPageComponent },
      { path: 'summary', component: SummaryPageComponent },
      { path: 'conclusion', component: ConclusionPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
