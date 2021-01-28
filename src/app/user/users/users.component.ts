import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  
  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((u: User[]) => {
      this.users = u.filter(x => !x.site_admin);
    });
  }

  onUserClicked(id: string): void {
    this.router.navigate(['users', id]);
  }
}