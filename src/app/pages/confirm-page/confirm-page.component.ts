import { Component, OnInit } from '@angular/core';
import { state } from '../../../assets/state/state';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css'],
})
export class ConfirmPageComponent implements OnInit {
  data: { [key: string]: { name: string; quantity: number; amount: number } };
  total: number;

  constructor() {
    this.data = state;

    this.total = Object.values(this.data).reduce(
      (total, current) => total + current.quantity * current.amount,
      0
    );
  }

  ngOnInit(): void {}
}
