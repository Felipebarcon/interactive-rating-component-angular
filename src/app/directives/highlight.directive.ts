import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() public appHighlight: boolean;

  @HostBinding('style.color') private color: string;
  @HostBinding('style.backgroundColor') private backgroundColor: string;

  constructor(public el: ElementRef) {
    console.log(this.el.nativeElement.node);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log(event.target);
  }
}
