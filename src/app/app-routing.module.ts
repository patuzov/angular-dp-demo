import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'roles', component: RolesComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
