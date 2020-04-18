import { CounterService } from './servise/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'click-game';

  constructor(public counterServise: CounterService) { }

  ngOnInit() {
  }

}