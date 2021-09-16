import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'oop',
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
export class OopComponent implements OnInit {
  label: string;
  firstName: string;
  lastName: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFirstName().subscribe((firstName) => {
      this.firstName = firstName;
    });

    this.dataService.getLastName().subscribe((lastName) => {
      this.lastName = lastName;
    });

    //  using this approach is hard to reason about
    this.formatFirstName();

    this.formatLastName();

    this.formatLabel();
  }

  formatFirstName() {
    this.firstName = this.firstName.toLowerCase();
  }
  formatLastName() {
    this.lastName = this.lastName.toUpperCase();
  }
  formatLabel() {
    this.label = `Mr. ${this.firstName} ${this.lastName}`;
  }
}
