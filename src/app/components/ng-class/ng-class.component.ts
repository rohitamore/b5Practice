import { Component } from '@angular/core';



@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  classNameDiv1: string = '';
  classNameDiv2: string = '';
  mydiv3ClassName: string = '';


  isActive: boolean = false;
  isCircle : boolean = true;
  makeCircle() {
    this.isCircle = true;
  }
  makeSquare() {
    this.isCircle = false;
  }



  
  addSucces() {
    this.classNameDiv1 = "bg-success";
  }
  removeSucces() {
    this.classNameDiv1 = "";
  }
  success() {
    this.mydiv3ClassName = "bg-success";
  }
  danger() {
    this.mydiv3ClassName = 'bg-danger'
  }
  secondary() {
    this.mydiv3ClassName = 'bg-secondary';
  }
}
