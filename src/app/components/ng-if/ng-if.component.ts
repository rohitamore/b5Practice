import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  isDiv1Visible: boolean = true;
  isHideAll: boolean = true;

  student1Name: string = "Sachin";
  student2Name: string = "ram";
  selectedCast: string = "";
  isDiv3Visible: boolean = true;

  onHideDiv1() {
    this.isDiv1Visible = false;
  }
  onShowDiv1() {
    this.isDiv1Visible = true;
  }

  toggleDiv3() {
    //1st way
    if(this.isDiv3Visible) {
      this.isDiv3Visible = false;
    } else {
      this.isDiv3Visible = true;
    }
    //2nd way
    this.isDiv3Visible = !this.isDiv3Visible;
  }
}
