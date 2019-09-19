import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appmenuitem]'
})
export class menuitemDirective {
  @HostBinding('class.itemOrange') private mostrar: boolean = false;
  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }
  constructor() { }

}
