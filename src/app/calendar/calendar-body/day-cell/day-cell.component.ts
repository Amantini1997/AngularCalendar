import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { isSelected, getCalendar } from '../calendar.component.functions';

@Component({
  selector: 'day-cell',
  template: `
    <div
        [id]="[day, isFromThisMonth]"
        [ngClass]="[(isFromThisMonth) ? 'current' : 'not-current',
                    (selected) ? 'selected' : 'not-selected',
                    'cell']"
        (click)="selectDay($event)">
        {{day}} 
    </div>
  `,
  styleUrls: ['./day-cell.component.scss'],
})
export class DayCellComponent implements OnInit {

  selected: boolean = false;

  @Input() isFromThisMonth: boolean;
  @Input() selectedDay : Function;
  @Input() day: number;
  @Input() currentDate: number;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() { 
    // this.selected = isSelected(this.isFromThisMonth, this.selectedDay, this.currentDate, this.day);
  }

  selectDay(e: any) : void {
    this.select.emit({
      isFromThisMonth: this.isFromThisMonth,
      day: this.day,
      e: e
    });
  }
}