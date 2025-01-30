import { Component } from '@angular/core';

@Component({
  selector: 'awc-root',
  imports: [],
  template: ` <h1>Welcome to {{ title }}!</h1> `,
  styles: []
})
export class AppComponent {
  title = 'Angular Web Components';
}
