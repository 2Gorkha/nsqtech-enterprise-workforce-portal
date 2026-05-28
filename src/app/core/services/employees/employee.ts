import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  apiUrl = 'http://localhost:3000/api/employees';

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