import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { EmployeeService } from '../../../core/services/employees/employee';

import { AuthService } from '../../../core/services/auth/auth';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class Dashboard implements OnInit {

  currentUser: any;

  isLoading = true;





  employees: any[] = [];





  employeeProfile: any;

  employeeStats: any[] = [];

  tasks: any[] = [];

  holidays: any[] = [];

  meetings: any[] = [];

  salaryDetails: any;



  constructor(

    private authService: AuthService,

    private router: Router,

    private cdr: ChangeDetectorRef,

    private employeeService: EmployeeService

  ) {}




  ngOnInit(): void {

    this.currentUser = this.authService.getCurrentUser();

    console.log(this.currentUser);



    

    this.employeeService.getEmployees()

      .subscribe({

        next: (response: any) => {

          console.log(response);

          this.employees = response.employees;

        },

        error: (error) => {

          console.log(error);

        }

      });


    this.employeeService.getDashboardData()

      .subscribe({

        next: (response: any) => {

          console.log(response);



          this.employeeProfile = this.employees.find(
            employee => employee.name === this.currentUser.name
          );



          this.employeeStats =
            response.dashboard.employeeStats;
          
          this.employeeService.getTasks()
          .subscribe({
            next: (taskResponse: any) => {
              console.log(taskResponse);
             this.tasks = taskResponse.tasks.filter(
              (task: any) =>
                task.assignedTo === this.currentUser.name
            );
              this.cdr.detectChanges();

            },
            error: (error) => {
              console.log(error);
            }
          });

          this.salaryDetails =
            response.dashboard.salaryDetails;



          this.holidays =
            response.dashboard.holidays;



          this.meetings =
            response.dashboard.meetings;


          this.isLoading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.log(error);

        }

      });

  }



  logout() {

    this.authService.logout();

    this.router.navigate(['/']);

  }

}