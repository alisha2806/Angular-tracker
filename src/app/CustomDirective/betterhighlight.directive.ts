import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background?:string ='transparent';
  @HostBinding('style.border') border?:string ='none';


  @HostListener('mouseenter') onmouseover(){
    this.background ="yellow";
    this.border="2px solid red"
  }

  @HostListener('mouseleave') onmouseout(){
    this.background ="transparent";
    this.border="none"
  }

}
