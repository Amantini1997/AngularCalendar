import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isSelected } from '../calendar-functions.module';

@Component({
  selector: 'calendar-body',
  template: `
    <div class="container">
    <div id="bar"></div>
      <div *ngFor="let row of calendar; let i = index" class="row">
        <day-cell *ngFor="let day of row" 
            class="day"
            (select)="selectDay($event)"
            [isFromThisMonth] = "!(i == FIRST_LINE && day > HALF_MONTH) && !(i > LAST_LINE && day < HALF_MONTH)"
            [day]="day">
        </day-cell>
      </div>
    </div>
  `,
  styleUrls: ['./calendar-body.component.scss'],
})
export class CalendarBodyComponent implements OnInit {
  readonly FIRST_LINE = 0;
  readonly HALF_MONTH = 15;
  readonly LAST_LINE = 3;
  selectedIsFromThisMonth: boolean;
  selectedDay: number;

  @Input() day: number;
  @Input() currentDate: number;
  @Input() calendar: Array<Array<any>>;
  @Input() bar: any;
  @Output() select = new EventEmitter();
  constructor() {}

  ngOnInit() { 
    // this.selected = isSelected(this.isFromThisMonth, this.selectedDay, this.currentDate, this.day);
  }

  selectDay({isFromThisMonth, day, e}) : void {
    this.select.emit({
      isFromThisMonth: isFromThisMonth,
      day: day
    });
    this.appendBar(e);
  }

  appendBar(e: any) : void {
    e.target.parentElement.parentElement.insertAdjacentElement("afterend", this.bar);
  }

}