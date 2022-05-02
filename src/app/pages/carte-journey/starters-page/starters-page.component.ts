import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { menu } from '../../../../assets/data/a-la-carte-menu';
import { Orderable } from 'src/app/interfaces/Orderable';

@Component({
  selector: 'app-starters-page',
  templateUrl: './starters-page.component.html',
  styleUrls: ['./starters-page.component.css'],
})
export class StartersPageComponent extends Orderable implements OnInit {
  constructor(private router: Router, private location: Location) {
    super();
  }

  ngOnInit(): void {}

  getStarters() {
    return menu.starters;
  }

  menuClicked() {
    this.location.back();
  }

  viewOrderClicked() {
    this.router.navigate(['confirm']);
  }
}
