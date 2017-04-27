import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-event',
  templateUrl: './save-event.component.html',
  styleUrls: ['./save-event.component.scss']
})
export class SaveEventComponent implements OnInit {

  links: Array<[string, string]>;

  constructor(public dialogRef: MdDialogRef<SaveEventComponent>) {
    this.links = [
      ['Google Calendar', 'https://www.google.com/calendar/render?action=TEMPLATE&dates=20170722T213000Z/20170723T040000Z&location=Metropolitan+Building+4401+11th+St%2C+Long+Island+City%2C+NY+11101&text=Erika+and+TJ%27s+Wedding&details=Unite+%2B+Drink+%2B+Dine+%2B+Toast+%2B+Dance'],
      ['iCalendar', 'http://addtocalendar.com/atc/ical?f=m&e[0][date_start]=2017-07-22%2017%3A30%3A00&e[0][date_end]=2017-07-23%2000%3A00%3A00&e[0][timezone]=America%2FNew_York&e[0][title]=Erika%20and%20TJ%27s%20Wedding&e[0][description]=Unite%20%2B%20Drink%20%2B%20Dine%20%2B%20Toast%20%2B%20Dance&e[0][location]=Metropolitan%20Building%204401%2011th%20St%2C%20Long%20Island%20City%2C%20NY%2011101&e[0][organizer]=Erika%20%2B%20TJ&e[0][organizer_email]=schneidererika%40gmail.com&e[0][privacy]=public'],
      ['Outlook', 'http://addtocalendar.com/atc/outlook?f=m&e[0][date_start]=2017-07-22%2017%3A30%3A00&e[0][date_end]=2017-07-23%2000%3A00%3A00&e[0][timezone]=America%2FNew_York&e[0][title]=Erika%20and%20TJ%27s%20Wedding&e[0][description]=Unite%20%2B%20Drink%20%2B%20Dine%20%2B%20Toast%20%2B%20Dance&e[0][location]=Metropolitan%20Building%204401%2011th%20St%2C%20Long%20Island%20City%2C%20NY%2011101&e[0][organizer]=Erika%20%2B%20TJ&e[0][organizer_email]=schneidererika%40gmail.com&e[0][privacy]=public'],
      ['Outlook Online', 'http://addtocalendar.com/atc/outlookonline?f=m&e[0][date_start]=2017-07-22%2017%3A30%3A00&e[0][date_end]=2017-07-23%2000%3A00%3A00&e[0][timezone]=America%2FNew_York&e[0][title]=Erika%20and%20TJ%27s%20Wedding&e[0][description]=Unite%20%2B%20Drink%20%2B%20Dine%20%2B%20Toast%20%2B%20Dance&e[0][location]=Metropolitan%20Building%204401%2011th%20St%2C%20Long%20Island%20City%2C%20NY%2011101&e[0][organizer]=Erika%20%2B%20TJ&e[0][organizer_email]=schneidererika%40gmail.com&e[0][privacy]=public'],
      ['Yahoo! Calendar', 'http://addtocalendar.com/atc/yahoo?f=m&e[0][date_start]=2017-07-22%2017%3A30%3A00&e[0][date_end]=2017-07-23%2000%3A00%3A00&e[0][timezone]=America%2FNew_York&e[0][title]=Erika%20and%20TJ%27s%20Wedding&e[0][description]=Unite%20%2B%20Drink%20%2B%20Dine%20%2B%20Toast%20%2B%20Dance&e[0][location]=Metropolitan%20Building%204401%2011th%20St%2C%20Long%20Island%20City%2C%20NY%2011101&e[0][organizer]=Erika%20%2B%20TJ&e[0][organizer_email]=schneidererika%40gmail.com&e[0][privacy]=public']
    ];
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
