import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { InvitationComponent } from './invitation/invitation.component';
import { HeroComponent } from './hero/hero.component';
import { CountDownComponent } from './count-down/count-down.component';
import { CoupleBiosComponent } from './couple-bios/couple-bios.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';

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
    CoupleBiosComponent,
    CalendarComponent,
    RsvpComponent,
    FooterComponent,
    NavigationComponent,
    AccomodationsComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey
    }),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
