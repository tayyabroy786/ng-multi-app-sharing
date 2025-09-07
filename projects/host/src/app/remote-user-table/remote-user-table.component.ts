import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'shared-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remote-user-table',
  templateUrl: './remote-user-table.component.html',
  styleUrls: ['./remote-user-table.component.css']
})
export class RemoteUserTableComponent implements OnInit {
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