import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { state } from '../../../assets/state/state';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css'],
})
export class ConfirmPageComponent implements OnInit {
  total: number;

  constructor(private router: Router, private location: Location) {
    this.total = this.getTotal();
  }

  getState(): {
    [key: string]: { name: string; quantity: number; amount: number };
  } {
    return state;
  }

  getTotal(): number {
    return Object.values(state).reduce(
      (total, current) => total + current.quantity * current.amount,
      0
    );
  }

  updateQuantityOf(quantity: number, key: string): void {
    console.log('quantity updated for', key, ':', quantity);

    state[key].quantity = quantity;
    this.total = this.getTotal();
  }

  menuClicked(): void {
    this.location.back();
  }

  confirmOrderClicked(): void {
    this.router.navigate(['summary']);
  }

  ngOnInit(): void {}
}
