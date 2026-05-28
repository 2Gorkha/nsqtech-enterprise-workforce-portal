import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {ChangeDetectorRef} from '@angular/core'
import {FormsModule} from '@angular/forms'
import { EmployeeService } from '../../../core/services/employees/employee';


import { AuthService } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-user-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})

export class UserManagement implements OnInit {

  currentUser: any;

  isLoading = true;
  showEmployeeModal = false;

newEmployee = {

  id: '',
  name: '',
  department: '',
  status: 'Active',
  role: ''

};
showTaskModal = false;


newTask = {

  title: '',

  assignedTo: '',

  priority: '',

  status: 'Pending'

};
employees = [
  {
    id: 'EMP-101',
    name: 'Rahul Raj',
    department: 'Engineering',
    status: 'Active',
    role: 'Frontend Developer'
  },{

    id: 'EMP-102',
    name: 'Aman Verma',
    department: 'Design',
    status: 'On Leave',
    role: 'UI Designer'
    },
    {
      id: 'EMP-103',
      name: 'Priya Sharma',
      department: 'HR',
      status: 'Active',
      role: 'HR Executive'
    }

  ];


  analytics = [

  {
    title: 'Total Employees',
    value: this.employees.length
  },

  {
    title: 'Active Employees',
    value: this.employees.filter(

      employee => employee.status === 'Active'

    ).length
  },

  {
    title: 'Meetings Today',
    value: 11
  },

  {
    title: 'Assigned Devices',
    value: 96
  }

];

  
  tasks = [

    {
      title: 'Dashboard UI Upgrade',
      assignedTo: 'Rahul Raj',
      priority: 'High',
      status: 'In Progress'
    },

    {
      title: 'Employee Meeting Report',
      assignedTo: 'Priya Sharma',
      priority: 'Medium',
      status: 'Pending'
    }

  ];

  devices = [

    {
      employee: 'Rahul Raj',
      device: 'MacBook Pro M2',
      status: 'Allocated'
    },

    {
      employee: 'Aman Verma',
      device: 'Dell XPS 15',
      status: 'Maintenance'
    }

  ];

  meetings = [

    {
      title: 'Sprint Planning',
      time: '10:00 AM',
      team: 'Engineering'
    },

    {
      title: 'HR Policy Review',
      time: '2:00 PM',
      team: 'HR'
    }

  ];

  constructor(

  private authService: AuthService,

  private router: Router,

  private cdr : ChangeDetectorRef,

  private employeeService: EmployeeService

) {}

  ngOnInit(): void {

    this.currentUser = this.authService.getCurrentUser();

    setTimeout(() => {

      this.isLoading = false;
      this.updateAnalytics();
      console.log('Loading Completed');
      this.cdr.detectChanges();

    }, 2000);

  }

  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);

  }
  openEmployeeModal() {

  this.showEmployeeModal = true;

}

closeEmployeeModal() {

  this.showEmployeeModal = false;

}
openTaskModal() {

  this.showTaskModal = true;

}



closeTaskModal() {

  this.showTaskModal = false;

}

addEmployee() {

  this.employees.push({

    ...this.newEmployee

  });

  this.updateAnalytics();



  this.newEmployee = {

    id: '',
    name: '',
    department: '',
    status: 'Active',
    role: ''

  };



  this.showEmployeeModal = false;

}
assignTask() {

  this.employeeService

    .assignTask(this.newTask)

    .subscribe({

      next: (response: any) => {

        console.log(response);



        this.tasks = response.tasks;



        this.newTask = {

          title: '',

          assignedTo: '',

          priority: '',

          status: 'Pending'

        };



        this.showTaskModal = false;



        this.cdr.detectChanges();

      },

      error: (error) => {

        console.log(error);

      }

    });

}
deactivateEmployee(employeeId: string) {

  this.employeeService

    .deactivateEmployee(employeeId)

    .subscribe({

      next: (response: any) => {

        console.log(response);



        this.employees = this.employees.map(employee => {

          if(employee.id === employeeId) {

            return {

              ...employee,

              status: 'Inactive'

            };

          }

          return employee;

        });
        this.updateAnalytics();



        this.cdr.detectChanges();

      },

      error: (error) => {

        console.log(error);

      }

    });
    

}
updateAnalytics() {

  this.analytics[0].value = this.employees.length;



  this.analytics[1].value = this.employees.filter(

    employee => employee.status === 'Active'

  ).length;

}



}