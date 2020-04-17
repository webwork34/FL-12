import { Component, OnInit } from '@angular/core';
import { CounterService } from '../servise/counter.service';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.scss']
})
export class PlayFieldComponent implements OnInit {

  constructor(private counterServise: CounterService) { }

  ngOnInit() {
  }

  start(){
    this.counterServise.startGame();
  }

  countClick(){
    this.counterServise.countClick();
  }
  
}