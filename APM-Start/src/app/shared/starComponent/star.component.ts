import {Component} from '@angular/core';
import {OnChanges} from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Input} from '@angular/core';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit('Rating ' + this.rating + ' was clicked!');
  }
}
