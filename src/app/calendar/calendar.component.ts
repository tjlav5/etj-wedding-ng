import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { SaveEventComponent } from '../save-event/save-event.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(public dialog: MdDialog, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
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

  openSaveDialog() {
    this.dialog.open(SaveEventComponent);
  }

}
