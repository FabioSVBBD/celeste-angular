import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Orderable } from '../../../interfaces/orderable';
import { menu } from '../../../../assets/data/a-la-carte-menu';

@Component({
  selector: 'app-mains-page',
  templateUrl: './mains-page.component.html',
  styleUrls: ['./mains-page.component.css'],
})
export class MainsPageComponent extends Orderable implements OnInit {
  constructor(private router: Router, private location: Location) {
    super();
  }

  getMains() {
    return menu.mains;
  }

  menuClicked() {
    this.location.back();
  }

  viewOrderClicked() {
    this.router.navigate(['confirm']);
  }

  ngOnInit(): void {}
}
