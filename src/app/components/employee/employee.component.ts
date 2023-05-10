import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  candidateObj: any = {
    "CandidateId": 0,
    "Name": "",
    "ContactNo": "",
    "Email": "",
    "Password": "",
    "CreatedDate": "2023-05-08T02:14:12.780Z",
    "City": "",
    "CollegeName": "",
    "Education": "",
    "BankName": "",
    "AccNo": "",
    "IfscCode": "",
    "Reference": ""
  }
  candidateArray: any[] = [];
  constructor(private http: HttpClient) {
    this.getCandidates();
  }

  getCandidates() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates")
    .subscribe((res: any) => {
      debugger;
      this.candidateArray = res.data;
    })
  }

  saveCandidate() {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate", this.candidateObj)
    .subscribe((result:any)=>{
      debugger;  
      alert(result.message);
      this.getCandidates();
    })
  }
}
