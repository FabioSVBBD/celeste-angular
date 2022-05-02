import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-page',
  templateUrl: './conclusion-page.component.html',
  styleUrls: ['./conclusion-page.component.css'],
})
export class ConclusionPageComponent implements OnInit {
  table: number = 317;
  user: { name: string; email: string } = {
    name: 'Athena',
    email: 'athenaharkness@yahoo.com',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  homeClicked() {
    this.router.navigate(['']);
  }
}
