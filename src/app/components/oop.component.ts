import { Component, Input } from '@angular/core';

@Component({
  selector: 'oop-component',
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
export class OopComponent {
  @Input() label: string;
}
