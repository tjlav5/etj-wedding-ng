import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { MdDialog, MdDialogRef } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { DomSanitizer } from '@angular/platform-browser';

interface WhatWGEventListenerArgs {
    capture?: boolean;
}

interface WhatWGAddEventListenerArgs extends WhatWGEventListenerArgs {
    passive?: boolean;
    once?: boolean;
}

type WhatWGAddEventListener = (
    type: string,
    listener: (event:Event) => void,
    options?: WhatWGAddEventListenerArgs
) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MdDialog, public sanitizer: DomSanitizer) {
  }
  
  headerColor = '#FFFFFF';
  headerBackground = 'rgba(256, 256, 256, 0.0)';
  boxShadow = this.sanitizer.bypassSecurityTrustStyle('0 0 6px 1px rgba(0, 0, 0, 0)');

  onPageYChange(pageY:number) {
    const MAX = 300;
    const clampedPageY = Math.min(Math.max(pageY, 0), MAX);
    const opacity = clampedPageY / MAX;
    const color = Math.floor(256.0 - (opacity * 256.0));
    this.headerBackground = `rgba(256, 256, 256, ${opacity})`;
    this.headerColor = `rgb(${color}, ${color}, ${color})`;
    this.boxShadow = this.sanitizer.bypassSecurityTrustStyle(`0 0 6px 1px rgba(0, 0, 0, ${opacity})`);
  }

  openDialog() {
    this.dialog.open(NavigationDialog, {
      position: {
        top: '20px',
        right: '20px'
      }
    });
  }

  ngOnInit() {
    (window.addEventListener as WhatWGAddEventListener)('scroll', () => {
      this.onPageYChange(window.scrollY);
    }, { passive: true, });
    // window.addEventListener('scroll', (e) => {
    //   window.requestAnimationFrame(() => {
    //     this.onPageYChange(window.scrollY);
    //   });
    // }, {passive: true});
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
