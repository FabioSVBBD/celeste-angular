import { Component, Input, OnInit } from '@angular/core';

const DEFAULT = 'default';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() primary: string = DEFAULT;
  @Input() secondary: string = DEFAULT;
  @Input() price: number = 0;
  @Input() detailed: boolean = false;
  @Input() selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
