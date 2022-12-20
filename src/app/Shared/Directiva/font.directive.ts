import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective {

  constructor( private element: ElementRef) { }

  ngOnInit(): void{
    this.element.nativeElement.style.fontSize = '20px'
    
  }
}
