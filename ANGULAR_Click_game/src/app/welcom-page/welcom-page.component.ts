import { Component, OnInit } from '@angular/core';
import { CounterService } from '../servise/counter.service';

@Component({
  selector: 'app-welcom-page',
  templateUrl: './welcom-page.component.html',
  styleUrls: ['./welcom-page.component.scss']
})
export class WelcomPageComponent implements OnInit {

  constructor(public counterServise: CounterService) { }

  ngOnInit() {
  }

  goToGame(event: any, input: any){
    this.counterServise.goToGame(event, input);
  }

}