import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'awc-root',
  imports: [],
  template: ` <div>
    <h1>{{ title() }}</h1>
    <h2 [class.negative]="count() < 0">{{ count() }}</h2>
    <button (click)="count.set(count() + 1)">Count Up</button>
    <button (click)="count.set(count() - 1)">Count Down</button>
    <button (click)="onReset()">Reset</button>
  </div>`,
  styles: `
    :host {
      --red-color: #af0000;
      --green-color: #05860c;

      text-align: center;

      h1, h2 {
        font-family: Arial, sans-serif;
      }

      h2 {
        color: var(--green-color);
        font-size: 300%;

        &.negative {
          color: var(--red-color);
        }
      }

      button {
        background-color: #555555;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 100%;
        margin: 5px;
        padding: 5px 10px;

        &:first-of-type {
          background-color: var(--green-color);
        }

        &:nth-of-type(2) {
          background-color: var(--red-color);
        }
      }
    }    
  `
})
export class AppComponent {
  title = input('Web Components with Angular');
  value = input(0);

  count = linkedSignal(() => Number(this.value()));

  onReset(): void {
    this.count.set(Number(this.value()));
  }
}

/**
 * Version that handles non-numeric values:
 */
/*
  count = linkedSignal(() => this.convertToNumber(this.value()));

  onReset(): void {
    this.count.set(this.convertToNumber(this.value()));
  }

  private convertToNumber(value: string | number): number {
    return isNaN(parseInt(value.toString(), 10))
      ? 0
      : parseInt(value.toString(), 10);
  }
 */
