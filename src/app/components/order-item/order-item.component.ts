import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() title: string;
  @Input() price: number;
  @Input() quantity: number;

  @Output() quantityEvent = new EventEmitter<number>();

  constructor() {
    this.title = 'Title';
    this.price = 0;
    this.quantity = 0;
  }

  ngOnInit(): void {}

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
      this.emitQuantityChange();
    }
  }

  increment() {
    this.quantity++;
    this.emitQuantityChange();
  }

  emitQuantityChange() {
    this.quantityEvent.emit(this.quantity);
  }
}
