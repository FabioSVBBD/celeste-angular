import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from '../../../assets/data/tasting-menu';
import { state } from '../../../assets/state/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menu = menu;
  personCount: number;

  constructor(private router: Router) {
    this.personCount = 0;
  }

  updateCounter(count: number) {
    this.personCount = count;

    state['tastingMenu'] = {
      name: 'Tasting Menu',
      quantity: count,
      amount: 100,
    };

    console.log('counter updated', this.personCount, state);
  }

  backClicked(): void {
    this.router.navigate(['']);
  }

  viewOrderClicked(): void {
    this.router.navigate(['confirm']);
  }
}
