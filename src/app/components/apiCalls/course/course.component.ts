import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courseList: any[]=[];
  courseObj: any = {
    "courseId": 0,
    "courseName": "",
    "courseDuration": "",
    "courseBasicFees": 0
  }
  constructor(private http:HttpClient){
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
  onUpdate() { 
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCourse",
     this.courseObj).subscribe((res:any)=>{
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
