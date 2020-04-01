import { Component, OnInit, Input } from '@angular/core';
import { getCalendar, getDateFromEuropeanType, getMonthName } from './calendar-functions.module';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentDate: Date;
  calendar: any;
  selectedDate: Date;
  bar: any;
  readonly MONTHS = 12;
  readonly HALF_MONTH = 15;

  @Input() inputDate: Date;
  constructor() {
    this.currentDate = this.inputDate || getDateFromEuropeanType();
    this.calendar = getCalendar(this.currentDate);
    this.selectedDate = this.currentDate;
    /** Don't ask my why, but without the timeout does not work */
    setTimeout(() => this.bar = document.querySelector("#bar"), 0);
  }

  ngOnInit() {}


  updateDate(changeFactor: number) : void {
    this.updateMonthAndYear(changeFactor);
    this.updateCalendar();
    this.hideBar();
  }

  updateMonthAndYear(changeFactor: number) : void {
    this.currentDate.setMonth(this.currentDate.getMonth() + changeFactor);
  }

  updateCalendar() : void {
    this.calendar = getCalendar(this.currentDate);
  }

  hideBar() {
    // let classList = this.bar.classList;
    // if (!classList.contains("hidden")) {
    //   classList.add("hidden");
    // }
    this.bar.className = "bar hidden";
  }

  showBar({ isFromThisMonth, day}) {
    this.setSelectedDate(isFromThisMonth, day);
    // this.bar.innerHTML = `<b>${this.selectedDate.getDate()} ${getMonthName(this.selectedDate.getMonth())}:</b>  `;
    // this.bar.className = "bar";

    // let classList = this.bar.classList;
    // if (classList.contains("hidden")) {
    //   classList.remove("hidden");
    // }
  }

  setSelectedDate(isFromThisMonth: boolean, day: number) {
    let month = this.currentDate.getMonth();
    if(!isFromThisMonth) {
      month += (day < this.HALF_MONTH ? 1 : -1);
    }
    this.selectedDate = new Date(this.currentDate);
    this.selectedDate.setMonth(month);
    this.selectedDate.setDate(day);
  }

  confirm() {
    alert(this.selectedDate);
  }
}
