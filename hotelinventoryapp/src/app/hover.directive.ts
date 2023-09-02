import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input() color: string='red'



  constructor(private element:ElementRef,private renderer:Renderer2) {
    console.log(this.element.nativeElement)
   }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor=this.color
    // this.document.
    this.renderer.setStyle(this.element.nativeElement,'backgourndColor',this.color)
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'blue'
    )
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  }
}
