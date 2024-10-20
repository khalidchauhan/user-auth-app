import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth-guard/auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "users", component: UserComponent, canActivate: [AuthGuard] },
    { path: "", redirectTo: "/login", pathMatch: "full" }
];
