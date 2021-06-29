import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenOnHover]'
})
export class OpenOnHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter = () => {
    this.display(1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.display(0);
  }

  private display (display: number) {
    let menu = this.el.nativeElement.getElementsByClassName("menu");
    menu[0].style.opacity = display;
  }
}

