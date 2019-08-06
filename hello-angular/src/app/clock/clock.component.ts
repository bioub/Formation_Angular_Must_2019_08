import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { format } from 'date-fns';
// import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  
  // formatNow = moment(new Date()).format('HH:mm:ss');
  formatNow = format(new Date(), 'HH:mm:ss');
  now = new Date();
  private intervalId;

  // constructor(protected cd: ChangeDetectorRef) { }

  // protected cd: ChangeDetectorRef;
  // constructor(cd: ChangeDetectorRef) { 
  //   this.cd = cd;
  // }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
      this.formatNow = format(new Date(), 'HH:mm:ss');
      // this.formatNow = moment(new Date()).format('HH:mm:ss');
      // this.cd.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
