import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'ring',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-ring.svg'));
    iconRegistry.addSvgIcon(
      'cocktail',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-cocktail.svg'));
    iconRegistry.addSvgIcon(
      'cupcake',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-cupcake.svg'));
  }

  ngOnInit() {
  }

}
