import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipe } from './test.pipe';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';
import { RolesComponent } from './roles/roles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    CustomersComponent,
    RolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
