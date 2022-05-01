import { Component, OnInit } from '@angular/core';
import { state } from '../../../assets/state/state';

const tastingMenu = 'tastingMenu';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css'],
})
export class SummaryPageComponent implements OnInit {
  hasTastingData: boolean = true;
  hasCarteData: boolean = true;

  constructor() {}

  getTastingData(): { name: string; quantity: number; amount: number } {
    return state[tastingMenu];
  }

  // rewrite this (map or reduce)
  getCarteData(): { name: string; amount: number; quantity: number }[] {
    let retVal: { name: string; amount: number; quantity: number }[] = [];

    Object.keys(state).forEach((key) => {
      if (key !== tastingMenu) {
        retVal.push(state[key]);
      }
    });

    return retVal;
  }

  getTotal(): number {
    return Object.values(state).reduce(
      (total, current) => total + current.quantity * current.amount,
      0
    );
  }

  payClicked() {
    console.log('Pay with Vodapay clicked', state);
  }

  ngOnInit(): void {}
}
