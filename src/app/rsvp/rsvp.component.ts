import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Rsvp } from './rsvp';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent {
  rsvps: FirebaseListObservable<any>

  model = new Rsvp(null, null, null, false, null, false, Date.now());

  submitted = false

  constructor(af: AngularFire, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    this.rsvps = af.database.list('/rsvps');
    iconRegistry.addSvgIcon(
      'envelope',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-envelope.svg'));
  }

  onSubmitYes() {
    this.model.attending = true;
    this._onSubmit();
  }

  onSubmitNo() {
    this.model.attending = false;
    this._onSubmit();
  }

  _onSubmit() {
    this.model.timestamp = Date.now();
    this.rsvps.push(this.model);
    this.submitted = true;
  }

}
