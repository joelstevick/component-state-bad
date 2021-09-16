import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'fp',
  template: `
    <h1>{{ label }}</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class FpComponent implements OnInit {
  label: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    forkJoin({
      firstName: this.dataService.getFirstName(),
      lastName: this.dataService.getLastName(),
    }).subscribe(({ firstName, lastName }) => {
      this.label = `Mr. 
      ${(firstName as string).toLowerCase()} 
      ${(lastName as string).toUpperCase()}`;
    });
  }
}
