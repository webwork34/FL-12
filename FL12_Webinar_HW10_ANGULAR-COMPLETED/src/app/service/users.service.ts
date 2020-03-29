import { Injectable } from '@angular/core';

export interface User{
  id: number,
  name: string,
  email: string,
  phone: string,
  disabled: boolean
}


@Injectable({providedIn: 'root'})
export class UsersService{

  public users: User[] = [
    {id: 1, name: 'aaa', email: 'test1@gmail.com', phone: '380502345678', disabled: true},
    {id: 2, name: 'aab', email: 'test2@gmail.com', phone: '+380671234567', disabled: true},
    {id: 3, name: 'abc', email: 'test3@gmail.com', phone: '123456789', disabled: true}
  ];

  removeUser(id: number){
    this.users = this.users.filter(user => user.id !== id);
  }

  saveNewUser(user: User){
    this.users = this.users.concat(user);
  }

  discard(user: User){
    user.disabled = true;
  }

  saveChanges(id: number, formData){
    this.users.forEach(user => {
      if(user.id === id){
        user.name = formData.nameEdited;
        user.email = formData.emailEdited;
        user.phone = formData.phoneEdited;
        user.disabled = true;
      }
    });
  }

}