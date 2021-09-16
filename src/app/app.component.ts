import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  label: string = 'foo';

  firstName: string;
  lastName: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFirstName().subscribe(firstName => {
      this.firstName = firstName;
    });

    this.dataService.getLastName().subscribe(lastName => {
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

  // no component state stored, easier to reason about
  functionalFormatLabel() {
    forkJoin({
      firstName: this.dataService.getFirstName(),
      lastName: this.dataService.getLastName()
    }).subscribe(({ firstName, lastName }) => {
      this.label = `Mr. ${this.firstName.toLowerCase()} ${this.lastName.toUpperCase()}`;
    });
  }
}
