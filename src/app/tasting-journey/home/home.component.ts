import { Component } from '@angular/core';
import { menu } from '../../../assets/data/tasting-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menu = menu;
  personCount: number;

  constructor() {
    this.personCount = 0;
  }

  updateCounter(count: number) {
    this.personCount = count;

    console.log('counter updated', this.personCount);
  }

  backClicked(): void {
    console.log('Back Button Clicked');
  }

  viewOrderClicked(): void {
    console.log('View Order Clicked');
  }
}
