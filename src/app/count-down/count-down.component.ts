import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  eventDate: Date
  seconds: number
  minutes: number
  hours: number
  days: number

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'bride-and-groom',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-bride-groom.svg'));
  }

  ngOnInit() {
    this.eventDate = new Date('Sat, 22 Jul 2017 17:00:00 EST');
    setInterval(() => {
      this.updateCountDown();
    }, 60);
  }

  updateCountDown() {
    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;
    const nowDate = Date.now();
    const diff = this.eventDate.getTime() - nowDate;

    this.days = Math.floor(diff / _day);
    this.hours = Math.floor((diff % _day) / _hour);
    this.minutes = Math.floor((diff % _hour) / _minute);
    this.seconds = Math.floor((diff % _minute) / _second);
  }



}
