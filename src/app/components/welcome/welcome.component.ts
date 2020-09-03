import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
})
export class Welcome {
  public title: string;
  public comment: string;
  public year: string;

  myDate = Date.now();

  constructor(private datePipe: DatePipe) {
    this.title = `Hello world, I am "welcome" Component!`;
    this.comment = 'This is my first Component.';
    this.year = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    console.log('Welcome component have been loaded!');
  }
}
