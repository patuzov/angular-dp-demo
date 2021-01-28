import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {      
      const id = p.get("id");
      console.log('getting user with id ', id);
      this.userService.getUser(id).subscribe(u => {
        console.log('user obtained ', u);
        this.user = u;
      });
    });
  }

}
