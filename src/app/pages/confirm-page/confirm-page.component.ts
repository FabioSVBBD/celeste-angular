import { Component, OnInit } from '@angular/core';
import { state } from '../../../assets/state/state';

const stubData = [
  { name: 'Tasting Menu', quantity: 2, amount: 100 },
  { name: 'Chicken', quantity: 1, amount: 120 },
  { name: 'Pasta', quantity: 1, amount: 115 },
];

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css'],
})
export class ConfirmPageComponent implements OnInit {
  data: { name: string; quantity: number; amount: number }[];
  total: number;
  stub: boolean = true;

  constructor() {
    this.data = this.stub ? stubData : state;

    this.total = this.data.reduce(
      (total, current) => total + current.quantity * current.amount,
      0
    );
  }

  ngOnInit(): void {}
}
