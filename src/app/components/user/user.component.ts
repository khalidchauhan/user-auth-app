import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { UserService } from '../../service/user/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  users: User[] = []; // Replace 'any' with a User model if you have one

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
        // this.router.navigate(['/login']);
      }
    );
  }
}
