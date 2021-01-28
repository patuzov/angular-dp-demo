import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((u: User[]) => {
      this.users = u.filter(x => !x.site_admin);
    });
  }

  onUserClicked(login: string): void {
    console.log(`User ${login} was clicked`);
  }
}