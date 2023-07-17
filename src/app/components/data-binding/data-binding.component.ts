import { Component } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  fName: string = "Chetan";
  myRollNo: number = 123;
  currentDate: Date = new Date();
  isIndian: boolean = true;
  num1: number =222;
  num2: number =333;
  result = this.num1 + this.num2;
  myPlcaehondertext : string = "ENter Name"
  inputType: string = "text";

  studentObject : any = {
    name:"Sachin",
    city:"Mumbai",
    hobby: "Playing Cricket"
  };
  
  maxInputLength : number = 8;
  myClassName: string = "text-danger";
  myHtml = "<p> <span> Hello</span> <span> Angular</span> </p>";
  firstName: string = "Chetan";
  lastName: string = "Jogi";
  fullName: string = "";
  city: string = "";

  createFullName() {
    debugger;
    this.fullName =  this.firstName + " " + this.lastName;
  }

  showAlert() {
    alert("Hi All")
  }
  onCityChange() {
    alert("City Changed")
  }
  onMouseOverMe() {
    console.log("Mouse Point On H1")
  }
  onMouseLeave() {
    console.log("Mouse Levae From H1")
  }
  ontextFoxus() {
    console.log("textbox acttive")
  }
  onTextFocusOut() {
    console.log("textbox Focus Out")
  }

}
