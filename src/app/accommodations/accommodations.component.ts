import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {

  disableDefaultUI: boolean = true
  lat: number = 51.678418;
  lng: number = 7.809007;

  src: string = `url("https://maps.googleapis.com/maps/api/staticmap?key=${environment.mapKey}&center=40.751280,-73.937111&zoom=14&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.business%7Cvisibility:off&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text%7Cvisibility:off&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0x9f9f9f&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0x7a7a7a&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0x1a1818&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=1000x1000&markers=icon:https://goo.gl/843HfH%7C40.74976,-73.948978&markers=icon:https://goo.gl/LOHZh8%7C40.752807, -73.927283")`;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconInNamespace(
      'marker',
      'venue',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-venue.svg'));
    iconRegistry.addSvgIconInNamespace(
      'marker',
      'hotel',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/ico-hotel-blue.svg'));
  }

  ngOnInit() {
  }

}
