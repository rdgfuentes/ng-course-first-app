import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[vAwesomeButton]'
})
export class AwesomeButtonDirective {
  
  @HostBinding('style.background-color') bgColor: string;
  @HostBinding('style.color') color: string;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {
    console.log(elementRef);
    renderer2.setStyle(elementRef.nativeElement, 'background-color', 'red');
    renderer2.setStyle(elementRef.nativeElement, 'color', 'white');
    this.color =  'white';
    this.bgColor = 'red';
  }

  @HostListener('mouseenter', ['$event'])
  mouseEnter($event: MouseEvent) {
    // if ( $event.clientX < (this.elementRef.nativeElement.offsetWidth / 2) + this.elementRef.nativeElement.offsetLeft ) {
    //   this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    //   this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'red');
    // } else {
    //   this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    //   this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // }
    this.color =  'red';
    this.bgColor = 'white';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.color =  'white';
    this.bgColor = 'red';
  }

}
