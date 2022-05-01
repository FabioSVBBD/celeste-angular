import { Component, OnInit } from '@angular/core';
import { state } from '../../../assets/state/state';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css'],
})
export class ConfirmPageComponent implements OnInit {
  total: number;

  constructor() {
    this.total = Object.values(state).reduce(
      (total, current) => total + current.quantity * current.amount,
      0
    );
  }

  getState() {
    return state;
  }

  updateQuantityOf(quantity: number, key: string) {
    console.log('quantity updated for', key, ':', quantity);

    state[key].quantity = quantity;
  }

  ngOnInit(): void {}
}
