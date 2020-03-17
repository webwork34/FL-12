import { Component } from '@angular/core';
// import { SearchService } from "./service/SearchService";
// import { GetDataService } from './service/get-data.service';

// export interface User{
//   id: number,
//   name: string,
//   email: string,
//   phone: string | number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'FL12-Webinar-HW10-ANGULAR';
  title = 'add-search field';

  // constructor(
  //   // private getDataService: GetDataService,
  //   private searchService: SearchService
  // ) {}


  // public users: User[] = [
  //   {id: 1, name: 'aaa', email: 'test1@gmail.com', phone: 380502345678},
  //   {id: 2, name: 'aab', email: 'test2@gmail.com', phone: '+380671234567'},
  //   {id: 3, name: 'abc', email: 'test3@gmail.com', phone: 123456789}
  // ];

  // users = [];
  // showUsers;

  // onInput(input: HTMLInputElement){
  //   console.log(this.users);
  //   this.users = this.searchService.filtereMethod(this.users, input.value); 
  //   console.log(this.users);
  // }

  // ngOnInit(){
  //   this.showUsers = this.getDataService.getData();
  //   this.users = this.getDataService.getData();
  // }
}
