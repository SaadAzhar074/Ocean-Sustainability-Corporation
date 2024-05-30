import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]',
})
export class NavbarScrollDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;

    if (scrollPosition < 300) {
      this.renderer.removeClass(this.el.nativeElement, 'scrolled');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'scrolled');
    }
  }
}
