import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from 'src/assets/data/tasting-menu';

const menuOptions = {
  starters: 'Starters',
  mains: 'Mains',
  desserts: 'Desserts',
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  menuOptions() {
    return menuOptions;
  }

  viewOrderClicked() {
    this.router.navigate(['confirm']);
  }

  menuClicked(type: string) {
    console.log(`routing to /a-la-carte/${type}`);
  }
}
