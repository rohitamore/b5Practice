import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent {

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  fName: string = '';
  mName: string = '';
  lName: string = '';
  fullName: string = '';

  number1:number = 0;
  number2: number = 0;
  calResult : number = 0;

  selectedCity : string = "";
  gender: string= '';



  multiply() {
    this.result = this.num1 * this.num2;
    debugger;
  }
  createFullName() {
    this.fullName = this.fName + " "+ this.mName + " "+ this.lName;
  }

  onAdd() {
   this.calResult = Number(this.number1)  + Number(this.number2) ;
  }
}
