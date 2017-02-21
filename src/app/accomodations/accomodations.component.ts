import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodations',
  templateUrl: './accomodations.component.html',
  styleUrls: ['./accomodations.component.scss']
})
export class AccomodationsComponent implements OnInit {

  disableDefaultUI: boolean = true
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
