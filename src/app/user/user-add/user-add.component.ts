import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User = <User>{
    id: '',
    login: '',
    email: '',
    site_admin: false
  };

  ngOnInit(): void {
  }


  onSubmit(form: NgForm): void {
    // console.log('user ', this.user);
    console.log(form.valid);

  }

}
