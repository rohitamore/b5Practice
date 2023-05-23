import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  dhoneImagesArray = [
    "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/04/PTI04_03_2023_000319B.jpg",
    "https://static.toiimg.com/thumb/msid-99600147,width-1280,resizemode-4/99600147.jpg" 
  ]
  courseList: any[]=[];
  courseObj: any = {
    "courseId": 0,
    "courseName": "",
    "courseDuration": "",
    "courseBasicFees": 0
  }
  constructor(private http:HttpClient, private master: MasterService){
    const yaer = this.master.getCurrentYear();
    this.getAllCourse();
  }
  getAllCourse() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList")
    .subscribe((res:any)=>{
      this.courseList = res.data;
    })
  }
  onEdit(course: any) {
    this.courseObj = course;
  }
  onSaveCourse() {
    debugger;
    this.master.saveCourse(this.courseObj).subscribe((res: any)=>{
      if(res.result){
        alert("Course created");
        this.getAllCourse();
      }
       else {
        alert(res.message);
       }
    })
  }
  onUpdate() { 
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCourse",this.courseObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Course Updated");
        this.getAllCourse();
      } else {
        alert(res.message);
      }
    })
  }
  onDelete(obj:any) {
    const isDelete = confirm("Are you Sure Want To Delete.?");
    if(isDelete) {
      this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCourse", obj).subscribe((res:any)=>{
        if(res.result) {
          alert("Course Deleted");
          this.getAllCourse();
        } else {
          alert(res.message)
        }
      })
    } 
  }
}
