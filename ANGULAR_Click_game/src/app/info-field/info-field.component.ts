import { Component, OnInit } from '@angular/core';
import { CounterService } from '../servise/counter.service';

@Component({
  selector: 'app-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.scss']
})
export class InfoFieldComponent implements OnInit {

  constructor(private counterServise: CounterService) { }

  ngOnInit() {
  }

  reset(){
    this.counterServise.reset();
  }

  changeRadio(){
    this.counterServise.changeRadio(event);
  }

  changeName(){
    this.counterServise.changeName();
  }

}