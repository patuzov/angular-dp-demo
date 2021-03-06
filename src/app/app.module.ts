import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipe } from './test.pipe';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    RolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
