import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('userData') user: User;   // oder @Input() userData: User;
  @Output() userClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    // ....
    this.userClicked.emit(this.user.id);
  }
}
