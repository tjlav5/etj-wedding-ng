import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {

  disableDefaultUI: boolean = true
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
