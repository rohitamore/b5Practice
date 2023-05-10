import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-practice',
  templateUrl: './ngif-practice.component.html',
  styleUrls: ['./ngif-practice.component.css']
})
export class NgifPracticeComponent {

  inputNum: number = 0;
  isEven: string = '';
  gender: string = '';
  selectedCategory: string = '';
  isTeacher: boolean = false;
  isSpoart: boolean = false;
  isMusician: boolean = false;

  setCategory(category: string) {
    debugger;
    this.selectedCategory = category;
  }

  setMobile() {
    this.selectedCategory = "Mobile"
  }
  setLaptop() {
    this.selectedCategory = "Laptop"
  }
  setCamera() {
    this.selectedCategory = "Camera"
  }
  
  onMusicianChnage() {
    if (this.isMusician) {
      this.isSpoart = false;
      this.isTeacher = false;
    }
  }
  onSpoartChange() {
    if (this.isSpoart) {
      this.isTeacher = false;
      this.isMusician = false;
    }
  }
  onTeacherChange() { 
    if (this.isTeacher) {
      this.isSpoart = false;
      this.isMusician = false;
    } 
  }

  checkNo() {
    debugger;
    if (Number(this.inputNum) % 2 == 0) {
      this.isEven = "Yes";
      console.log("No Is Even")
    } else {
      this.isEven = "No";
      console.log("No is Odd")
    }
  }
}

