import { Component } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { MdDialog, MdDialogRef } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MdDialog) {}

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

  openDialog() {
    this.dialog.open(NavigationDialog, {
      position: {
        top: '20px',
        right: '20px'
      }
    });
  }

}

@Component({
  selector: 'app-navigation-dialog',
  templateUrl: './navigation/navigation.component.dialog.html',
})
export class NavigationDialog {
  constructor(public dialogRef: MdDialogRef<NavigationDialog>) {}

  scrollTo(target: string) {
    let elem = document.querySelector(`#${target}`);
    elem.scrollIntoView();
    this.dialogRef.close();
  }
}
