import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { menu } from '../../../../assets/data/a-la-carte-menu';
import { Orderable } from '../../../interfaces/orderable';

@Component({
  selector: 'app-desserts-page',
  templateUrl: './desserts-page.component.html',
  styleUrls: ['./desserts-page.component.css'],
})
export class DessertsPageComponent extends Orderable implements OnInit {
  constructor(private router: Router, private location: Location) {
    super();
  }

  ngOnInit(): void {}

  getDesserts() {
    return menu.desserts;
  }

  menuClicked() {
    this.location.back();
  }

  viewOrderClicked() {
    this.router.navigate(['confirm']);
  }
}
