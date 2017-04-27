import { EventEmitter, Directive, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTrackScroll]'
})
export class TrackScrollDirective {
  @Output() pageYPositionChange:EventEmitter<any> = new EventEmitter();

  constructor() { }

  //@HostListener('scroll', ['$event'])
  track(event:any) {
    this.pageYPositionChange.emit(event.target.scrollTop);
  }

}
