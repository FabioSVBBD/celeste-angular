import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-tool',
  templateUrl: './order-tool.component.html',
  styleUrls: ['./order-tool.component.css'],
})
export class OrderToolComponent implements OnInit {
  @Input() counter: number;

  @Output() countEvent = new EventEmitter<number>();

  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;

    this.emitCounter();
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
      this.emitCounter();
    }
  }

  emitCounter() {
    this.countEvent.emit(this.counter);
  }

  ngOnInit(): void {}
}
