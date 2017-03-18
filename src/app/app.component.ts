import { Component } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerColor = '#FFFFFF';
  headerBackground = 'rgba(256, 256, 256, 0.0)';

  onPageYChange(pageY:number) {
    const MAX = 300;
    const clampedPageY = Math.min(Math.max(pageY, 0), MAX);
    const opacity = clampedPageY / MAX;
    const color = Math.floor(256.0 - (opacity * 256.0));
    this.headerBackground = `rgba(256, 256, 256, ${opacity})`;
    this.headerColor = `rgb(${color}, ${color}, ${color})`;
  }

}
