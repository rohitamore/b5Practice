import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  //string
  fName: string = "Chetan";
  productDescription: string = "Demo Product";
  productPrice: string = "12.56";
  //number
  rollNo : number = 123;
  productDiscoutPrice: number = 12.55;
  //boolean
  isIndian: boolean = false;
  //datetime
  currentDate: Date = new Date();
  
  student: any;// it can store all data type values

  cityNames: string [] = ["Pune","Nagpur","Solapur","Mumbai"];
  rollNoArray: number [] = [];

  studentObj : any = {
    name: "Aditya",
    age: 23,
    state: "Mh",
    contactNos: ["988787687","o7689787687","345656345"]
  };
  studentArray : any [] = [
    {
      name: "Sahcin",
      age:56
    },
    {
      name: "Aditya",
      age:34
    }
  ];

  constructor() {
    this.fName = "2323";
    this.rollNoArray.push(111);
    this.rollNoArray.unshift(112);
    this.student = "Chetan";
    this.student = 123;
    this.student = new Date();
    this.fName = "Aditya";
    this.rollNo = 123123;
  }





}
