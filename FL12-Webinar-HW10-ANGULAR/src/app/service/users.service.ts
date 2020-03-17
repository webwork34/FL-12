import { Injectable } from '@angular/core';

export interface User{
  id: number,
  name: string,
  email: string,
  phone: string,
}


@Injectable({providedIn: 'root'})
export class UsersService{

  public users: User[] = [
    {id: 1, name: 'aaa', email: 'test1@gmail.com', phone: '380502345678'},
    {id: 2, name: 'aab', email: 'test2@gmail.com', phone: '+380671234567'},
    {id: 3, name: 'abc', email: 'test3@gmail.com', phone: '123456789'}
  ];
  

  removeUser(id: number){
    this.users = this.users.filter(user => user.id !== id);
  }

  saveNewUser(user: User){
    this.users = this.users.concat(user);
  }

  editUser(id: number){
    console.log(this.users.filter(user => user.id === id));
  }

}
