import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../service/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  formAdd: FormGroup;
  formEdit: FormGroup;

  searchStr: string = '';
  toggleDisplayAdd = false;
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.pattern('\\+?[0-9]{7,15}'), Validators.required])
    })
    
    this.formEdit = new FormGroup({
      name: new FormControl({value: '', disabled: true}),
      email: new FormControl({value: '', disabled: true}),
      phone: new FormControl({value: '', disabled: true}),

      nameEdited: new FormControl('', [Validators.minLength(3), Validators.required]),
      emailEdited: new FormControl('', [Validators.email, Validators.required]),
      phoneEdited: new FormControl('', [Validators.pattern('\\+?[0-9]{7,15}'), Validators.required])
    })

  }

  addUser(){
    this.toggleDisplayAdd = true;
  }

  cancelAddNew(){
    this.toggleDisplayAdd = false;
  }

  removeUser(id: number){
    this.usersService.removeUser(id);
  }

  editUser(id: number, user: User){
    user.disabled = false;
    this.usersService.users.forEach(user => {
      if(id === user.id){
        this.formEdit.get('nameEdited').setValue(user.name);
        this.formEdit.get('emailEdited').setValue(user.email);
        this.formEdit.get('phoneEdited').setValue(user.phone);
      }
    });
  }

  discard(user: User){
    this.usersService.discard(user);
  }

  saveNewUser(){
    let id = 1;
    if(this.usersService.users.length){
      id = this.usersService.users[this.usersService.users.length - 1].id + 1;
    }
    
    if(this.formAdd.valid){
      const formData = {...this.formAdd.value, id, disabled: true};
      this.usersService.saveNewUser(formData);
      this.formAdd.reset();
    }
  }

  saveChanges(id: number){
    const formData = {...this.formEdit.value};
    this.usersService.saveChanges(id, formData);
  }

}