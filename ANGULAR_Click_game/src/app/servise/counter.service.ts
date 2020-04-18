import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  counter: any = 0;
  timerId: any;

  timerName: string = 'timer_10';
  name: string = 'Player';

  timer: number = 10;
  timerSecond: number = 10;
  previousRecord: number;
  previousRecordFive: number = 0;
  previousRecordTen: number = 0;
  previousRecordFifteen: number = 0;
  
  welcomeToggle: boolean = true;
  showBtn: boolean = false;
  btnDisabled: boolean = false;
  radioDisabled: boolean = false;
  changeNameDisabled: boolean = false;
  winToggle: boolean = false;
  noWinToggle: boolean = false;
  goodToggle: boolean = true;
 
  checkLS(): void{
    if(localStorage.getItem('timer_5')){
      this.previousRecordFive = +localStorage.getItem('timer_5')
    }
    if(localStorage.getItem('timer_10')){
      this.previousRecordTen = +localStorage.getItem('timer_10')
    }
    if(localStorage.getItem('timer_15')){
      this.previousRecordFifteen = +localStorage.getItem('timer_15')
    }
    this.previousRecord =  this.previousRecordTen;
  }

  setToLS(): void{
    if(this.counter > +localStorage.getItem(`${this.timerName}`)){
      localStorage.setItem(`${this.timerName}`, this.counter);
      this.winToggle = true;
    }else{
      this.noWinToggle = true;
      if(+localStorage.getItem(`${this.timerName}`) - 5 > this.counter){
        this.goodToggle = false;
      }
    }
  }

  goToGame(event: any, input: any): void{
    event.preventDefault();
    if(input.value.trim()){
      this.name = input.value;
    }
    this.checkLS();
    this.welcomeToggle = false;
  }

  displayRecord(): void{
    this.checkLS();
    switch (this.timerName){
      case 'timer_5':
        this.previousRecord = this.previousRecordFive;
        break;
      case 'timer_10':
          this.previousRecord = this.previousRecordTen;
          break;
      case 'timer_15':
          this.previousRecord = this.previousRecordFifteen;
          break;
    }
  }

  changeRadio(event: any): void{
    this.timer = +event.target.value;
    this.timerSecond = +event.target.value;
    this.timerName = event.target.id;
    this.displayRecord();
  }

  startGame(): void{
    this.showBtn = true;
    this.radioDisabled = true;
    this.changeNameDisabled = true;
    this.timerId = setInterval(() =>{
      this.timer--;
      if(!this.timer){
        this.btnDisabled = true;
        clearInterval(this.timerId);
        this.setToLS();
        this.changeNameDisabled = false;
      }
    }, 1000);
  }

  countClick(): void{
    this.counter++;
  }

  reset(): void{
    this.counter = 0;
    clearInterval(this.timerId);
    this.timer = this.timerSecond || 10;
    this.showBtn = false;
    this.btnDisabled = false;
    this.radioDisabled = false;
    this.displayRecord();
    this.winToggle = false;
    this.noWinToggle = false;
    this.goodToggle = true;
  }

  changeName(): void{
    this.reset();
    this.welcomeToggle = true;
    this.name = 'Player';
    this.timerSecond = 10;
    this.timer = 10;
  }

}