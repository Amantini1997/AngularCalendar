import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calendar-header',
  template: `
    <div class="header">
      <img [src]="IMG_PATH" class="arrow left" (click)=updateMonth(-1)>
      <span class="month">{{MONTH_NAMES[date.getMonth()]}} {{date.getFullYear()%LAST_TWO_YEAR_DIGIT}}</span>
      <img [src]="IMG_PATH" class="arrow right" (click)=updateMonth(1)>
    </div>
    <div class="container">
      <div *ngFor="let day of DAYS" class="week-day">{{day}}</div>
    </div>
  `,
  styleUrls: ['./calendar-header.component.scss'],
})
export class CalendarHeaderComponent {  

  @Input() date: Date;
  @Output() updateMonthEmitter = new EventEmitter();
  constructor() {}
    
  readonly IMG_PATH ="assets/img/arrow.png";
  readonly DAYS = [
    "MO",
    "TU",
    "WE",
    "TH",
    "FR",
    "SA",
    "SU"
  ];

  readonly MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  readonly LAST_TWO_YEAR_DIGIT = 100;
  
  /**
   * @param changeFactor 1 for next month, -1 for previous
   */
  updateMonth(changeFactor: number) : void {
    this.updateMonthEmitter.emit(changeFactor);
  }

  // /**
  //  * Return the full name of the month from the received date
  //  * @param {Date} date: date
  //  * @return {string} The name of date's month
  //  */
  // getMonthName(date: Date) : string {
  //   return this.MONTH_NAMES[date.getMonth()];
  // }

  // /**
  //  * Return month and year from the received date as string.
  //  * (Mon Mar 04 2019 ... = March 2019)
  //  * @param {Date} date: date
  //  * @return {string} Month and Year as string
  //  */
  // getMonthAndYear(date: Date) : string {
  //     return this.getMonthName(date) + " " + date.getFullYear();
  // }  
}
