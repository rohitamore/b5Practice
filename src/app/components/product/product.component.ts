import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor() {
    this.readDataFromLocal();
  }
  emploeyeObj: any = {
    name:'',
    contact:'234234',
    department: '',
    technology:'',
    leadName: ''
  };
  localDataObj: any;
  inputNo: number = 0;
  mesage:string = '';
  checkEvenOdd() {
    if(Number(this.inputNo)  % 2 == 0) {
      this.mesage = "No is even";
    }  else {
      this.mesage = "No is Odd";
    }
  }
  onSaveEmp() {
    localStorage.setItem("empData" , JSON.stringify(this.emploeyeObj));
  }
  readDataFromLocal() {
    debugger;
    const localData = localStorage.getItem("empData");
    if(localData != null) {
      this.localDataObj =  JSON.parse(localData);
    } 
  }
}
