import { Component, Input, OnInit } from '@angular/core';

const DEFAULT = 'default';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() primary: string;
  @Input() secondary: string;

  constructor() {
    this.primary = DEFAULT;
    this.secondary = DEFAULT;
  }

  ngOnInit(): void {}
}
