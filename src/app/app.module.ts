import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  ButtonComponent,
  ChipComponent,
  ConclusionLeavesComponent,
  FatButtonComponent,
  GoldBoxComponent,
  HomeLeavesComponent,
  MenuItemComponent,
  OrderItemComponent,
  OrderToolComponent,
  TitleComponent,
} from './components';

import {
  CarteMenuHome,
  ConclusionPageComponent,
  ConfirmPageComponent,
  DessertsPageComponent,
  LandingPageComponent,
  MainsPageComponent,
  StartersPageComponent,
  SummaryPageComponent,
  TastingMenuHome,
} from './pages';

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
    FatButtonComponent,
    StartersPageComponent,
    MainsPageComponent,
    DessertsPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'tasting-menu', component: TastingMenuHome },
      { path: 'a-la-carte', component: CarteMenuHome },
      { path: 'a-la-carte/starters', component: StartersPageComponent },
      { path: 'a-la-carte/mains', component: MainsPageComponent },
      { path: 'a-la-carte/desserts', component: DessertsPageComponent },
      { path: 'confirm', component: ConfirmPageComponent },
      { path: 'summary', component: SummaryPageComponent },
      { path: 'conclusion', component: ConclusionPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
