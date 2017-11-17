import { Renderer, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private render: Renderer) {

  }

  @HostListener('mouseenter') moreShadow() {
    this.render.setElementStyle(this.el.nativeElement, 'boxShadow', '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0, 0, 0, 0.22)');
  }
  @HostListener('mouseleave') lessShadow() {
    this.render.setElementStyle(this.el.nativeElement, 'boxShadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
  }
}