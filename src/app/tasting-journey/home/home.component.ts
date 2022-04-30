import { Component, OnInit } from '@angular/core';
import { menu } from '../../../assets/data/tasting-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  menu = menu;

  constructor() {}

  ngOnInit(): void {}

  backClicked(): void {
    console.log('Back Button Clicked');
  }

  viewOrderClicked(): void {
    console.log('View Order Clicked');
  }
}
