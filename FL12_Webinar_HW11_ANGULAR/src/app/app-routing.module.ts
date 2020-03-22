import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/new', component: AddEditUserComponent},
  {path: `users/:id`, component: AddEditUserComponent},
  {path: '', redirectTo: 'users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
