import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, CreateUserRequest } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Initialize with sample data
    const sampleUsers: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        address: '123 Main St, City, State'
      }
    ];
    this.usersSubject.next(sampleUsers);
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }

  createUser(userData: CreateUserRequest): User {
    const newUser: User = {
      id: Date.now().toString(),
      ...userData
    };
    
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, newUser]);
    return newUser;
  }

  updateUser(id: string, userData: Partial<User>): User | null {
    const users = this.usersSubject.value;
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) return null;
    
    const updatedUser = { ...users[userIndex], ...userData };
    users[userIndex] = updatedUser;
    this.usersSubject.next([...users]);
    
    if (this.currentUserSubject.value?.id === id) {
      this.currentUserSubject.next(updatedUser);
    }
    
    return updatedUser;
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }

  clearCurrentUser(): void {
    this.currentUserSubject.next(null);
  }

  deleteUser(id: string): boolean {
    const users = this.usersSubject.value;
    const filteredUsers = users.filter(u => u.id !== id);
    
    if (filteredUsers.length === users.length) return false;
    
    this.usersSubject.next(filteredUsers);
    
    if (this.currentUserSubject.value?.id === id) {
      this.currentUserSubject.next(null);
    }
    
    return true;
  }
}