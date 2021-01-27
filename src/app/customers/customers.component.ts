import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserDto } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  users$ = this.userService.getUsers();
  users: UserDto[] = [];
  
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$.subscribe((u: User[]) => {
      this.users = u.filter(x => !x.site_admin).map(x => new UserDto(x));
    });
  }

}
