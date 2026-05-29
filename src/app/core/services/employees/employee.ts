import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  apiUrl = 'https://nsqtech-enterprise-workforce-portal.onrender.com';

  constructor(private http: HttpClient) {}



 

  getEmployees() {

    return this.http.get(this.apiUrl);

  }



  

  getDashboardData() {

    return this.http.get(

      `${this.apiUrl}/dashboard-data`

    );

  }




  deactivateEmployee(employeeId: string) {

    return this.http.put(

      `${this.apiUrl}/deactivate/${employeeId}`,

      {}

    );

  }
  assignTask(taskData: any) {

  return this.http.post(

    `${this.apiUrl}/assign-task`,

    taskData

  );
}
getTasks() {

    return this.http.get(

      `${this.apiUrl}/tasks`

    );

  }

}