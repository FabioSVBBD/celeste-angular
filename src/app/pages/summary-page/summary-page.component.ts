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

  getCarteData(): { name: string; amount: number; quantity: number }[] {
    return Object.entries(state).reduce(
      (
        accumulated: { name: string; amount: number; quantity: number }[],
        [key, value]
      ) => {
        if (key !== tastingMenu) {
          accumulated.push(value);
        }

        return accumulated;
      },
      [] as { name: string; amount: number; quantity: number }[]
    );
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
