import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserAddReactiveComponent } from './user-add-reactive/user-add-reactive.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    UsersComponent,
    UserComponent,
    UserViewComponent,
    UserEditComponent,
    UserAddComponent,
    UserAddReactiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent,
    UserViewComponent,
    UserEditComponent,
    UserAddComponent,
    UserAddReactiveComponent
  ]
})
export class UserModule { }
