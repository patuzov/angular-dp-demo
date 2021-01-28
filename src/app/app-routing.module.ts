import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './user/users/users.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserAddComponent } from './user/user-add/user-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'users/:id', component: UserViewComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'roles/irgendwas', component: RolesComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
