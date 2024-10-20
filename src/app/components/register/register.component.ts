import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.username, this.password).subscribe((response) => 
      console.log("User Registered : " + response)
    );
  }
}
