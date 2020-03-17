import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchStr: string = '';
  toggleDisplayDiv = false;
  name: string = '';
  email: string = '';
  phone: string = '';
  toggleBorder = true;
  buttonStatus = true;
  toggleInput = true;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(){
    this.toggleDisplayDiv = true;
  }

  cancelAddNew(){
    this.toggleDisplayDiv = false;
  }

  removeUser(id: number){
    this.usersService.removeUser(id);
  }

  editUser(id: number){
    this.usersService.editUser(id);
  }


  saveNewUser(){
    let id = 1;
    
    if(this.usersService.users.length){
      id = this.usersService.users[this.usersService.users.length - 1].id + 1;
    }

    const user: User = {
      id,
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    //  if(this.name.length >= 2 &&
    //   this.email.length >= 2 &&
    //   this.phone.length >= 3){

    //     this.buttonStatus = false;
    //     this.toggleBorder = false;
    //    }

       this.usersService.saveNewUser(user);

        this.name = '';
        this.email = '';
        this.phone = '';
   
    // this.toggleBorder = true;

  }

}