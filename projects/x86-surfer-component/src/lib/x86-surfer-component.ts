import { Component } from '@angular/core';
import { Surfer } from './surfer/surfer';

@Component({
  selector: 'lib-x86-surfer-component',
  imports: [Surfer],
  template: ` <lib-surfer></lib-surfer> `,
  styles: ``,
})
export class X86SurferComponent {}
