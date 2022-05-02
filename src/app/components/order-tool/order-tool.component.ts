import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-tool',
  templateUrl: './order-tool.component.html',
  styleUrls: ['./order-tool.component.css'],
})
export class OrderToolComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() detailed: boolean = false;

  @Output() countEvent = new EventEmitter<number>();

  constructor() {}

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  addToOrderClicked() {
    this.countEvent.emit(this.counter);
  }

  ngOnInit(): void {}
}
