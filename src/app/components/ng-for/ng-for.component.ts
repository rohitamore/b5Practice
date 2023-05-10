import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  city: string= '';
  cityList: string []= ["Mumbai","Thane","Jabalpur","Solapur","Pune"];
  rollNoArray:  number [] = [11,12,13,14,15,16,17,18];

  constructor(){
    this.cityList.push("Jalgao")
  }
  studentList: any[]= [
    {
      name:'Sachin',
      age:56,
      hobby: 'cricket'
    },
    {
      name:'Rahul',
      age:66,
      hobby: 'cricket'
    },
    {
      name:'Ankit',
      age:43,
      hobby: 'Chess'
    },
    {
      name:'Angad',
      age:32,
      hobby: 'Vollyball'
    },
  ]

  saveCity() {
    this.cityList.push(this.city)
  }


}
