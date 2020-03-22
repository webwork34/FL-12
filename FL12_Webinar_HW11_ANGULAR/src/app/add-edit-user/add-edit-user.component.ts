import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService, User } from '../users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if(!this.usersService.addEditToggle){
      this.route.params.pipe(
        switchMap((params: Params) => {
          return this.usersService.getById(params['id'])
        })
      ).subscribe((user: User) => {
        this.form = new FormGroup({
          name: new FormControl(user.name, [Validators.minLength(3), Validators.required]),
          email: new FormControl(user.email, [Validators.email, Validators.required]),
          phone: new FormControl(user.phone, [Validators.minLength(3), Validators.required]),
          address: new FormControl(user.address.street || user.address),
          website: new FormControl(user.website)
        });
      })
    }
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.minLength(3), Validators.required]),
      address: new FormControl(''),
      website: new FormControl('')
    });
  }

  saveNewUser(){
    if(this.form.valid){
      const formData = {...this.form.value};

      if(this.usersService.addEditToggle){
        this.usersService.postUser(formData).subscribe(user => user);
      }else{
        this.usersService.editUser(formData).subscribe(user => user);
      }
      this.form.reset();
      this.router.navigate(["/users"]);
    }
  }

   discard(){
    this.router.navigate(["/users"]);
  }

}