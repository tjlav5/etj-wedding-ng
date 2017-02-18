import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { InvitationComponent } from './invitation/invitation.component';
import { HeroComponent } from './hero/hero.component';
import { CountDownComponent } from './count-down/count-down.component';

const appRoutes: Routes = [
  { path: 'invitation', component: InvitationComponent },
  { path: '', redirectTo: '/invitation', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    InvitationComponent,
    HeroComponent,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
