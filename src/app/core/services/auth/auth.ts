import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}



  login(userId: string, password: string, role: string) {

    return this.http.post(

      `${this.apiUrl}/login`,

      {
        userId,
        password,
        role
      }

    );

  }



  saveUser(user: any) {

    localStorage.setItem(

      'currentUser',

      JSON.stringify(user)

    );

  }



  getCurrentUser() {

    const userData = localStorage.getItem('currentUser');

    if(userData) {

      return JSON.parse(userData);

    }

    return null;

  }



  logout() {

    localStorage.removeItem('currentUser');

  }

}