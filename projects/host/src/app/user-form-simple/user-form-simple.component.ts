import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, User } from 'shared-lib';

@Component({
  selector: 'app-user-form-simple',
  templateUrl: './user-form-simple.component.html',
  styleUrls: ['./user-form-simple.component.css']
})
export class UserFormSimpleComponent implements OnInit {
  userForm: FormGroup;
  editingUser: User | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        this.editingUser = user;
        this.userForm.patchValue(user);
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.editingUser) {
        this.userService.updateUser(this.editingUser.id, this.userForm.value);
      } else {
        this.userService.createUser(this.userForm.value);
      }
      this.resetForm();
    }
  }

  resetForm() {
    this.userForm.reset();
    this.editingUser = null;
    this.userService.setCurrentUser(null);
  }
}