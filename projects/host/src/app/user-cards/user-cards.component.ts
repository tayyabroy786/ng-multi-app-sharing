import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'shared-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit() {}

  editUser(user: User) {
    this.userService.setCurrentUser(user);
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id);
    }
  }
}