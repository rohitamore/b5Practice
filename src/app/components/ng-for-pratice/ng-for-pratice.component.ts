import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-pratice',
  templateUrl: './ng-for-pratice.component.html',
  styleUrls: ['./ng-for-pratice.component.css']
})
export class NgForPraticeComponent {

  stateArray: string [] = [];
  employeeList: any []= [];
  numbers: number []= [1,2,3,4,5,6,7,8,9,10];

  constructor(){
    this.stateArray = ["Mah", "MP","CG","Goa","Pun"];
    this.employeeList = [
      {
        empId: 1,
        empName: 'Chetan',
        empCity: 'Nagpur',
        empGender: "M",
        isActive: false
      },
      {
        empId:2,
        empName: 'Sachin',
        empCity: 'Mumbai',
        empGender: "M",
        isActive: true
      },
      {
        empId: 3,
        empName: 'Radhika',
        empCity: 'Pune',
        empGender: "F",
        isActive: false
      }
    ] 
    debugger;
  }

}
