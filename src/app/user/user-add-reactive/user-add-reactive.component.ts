import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add-reactive',
  templateUrl: './user-add-reactive.component.html',
  styleUrls: ['./user-add-reactive.component.scss']
})
export class UserAddReactiveComponent implements OnInit {

  constructor() { }

  userForm: FormGroup;

  get loginControl(): FormControl {
    return <FormControl>this.userForm.get('login');
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', Validators.email),
      isAdmin: new FormControl(true)
    });
  }

  onSubmit(): void {    
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }
}
