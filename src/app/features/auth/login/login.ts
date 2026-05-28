import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router'

import { AuthService } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  selectedRole = '';

  userId = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  selectRole(role: string) {
    this.selectedRole = role;

    this.userId = "";
    this.password ="";
  }

 handleLogin() {

  this.authService.login(

    this.userId,

    this.password,

    this.selectedRole

  ).subscribe({

    next: (response: any) => {

      if(response.success) {

        this.authService.saveUser(response.user);

        if(this.selectedRole === 'User') {

          this.router.navigate(['/dashboard']);

        }

        else if(this.selectedRole === 'Admin') {

          this.router.navigate(['/admin']);

        }

      }

    },

    error: (error) => {

      alert('Invalid Credentials');

      console.log(error);

    }

  });

}

}