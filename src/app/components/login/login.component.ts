import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((response) => {
      console.log("User is logged in : " + response);
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/users']);
      }
    });
  }
}
