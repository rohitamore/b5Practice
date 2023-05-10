import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {

  candidateArray: any[]=[];
  candidateObj:any= {
    "candidateId": 0,
    "name": "",
    "contactNo": "",
    "email": "",
    "password": "",
    "createdDate": "2023-05-10T01:52:59.860Z",
    "city": "",
    "collegeName": "",
    "education": "",
    "bankName": "",
    "accNo": "",
    "ifscCode": "",
    "reference": ""
  }
  constructor(private http: HttpClient){
    this.getAllCanidates();
  }
  getAllCanidates() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((res: any)=>{
      this.candidateArray = res.data;
    })
  }
  onEdit(id: number) {
    debugger;
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetCandidateById?id="+id).subscribe((res: any)=>{
      debugger; 
     this.candidateObj =  res.data;
    })
  }
  onUpdate() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCandiadte", this.candidateObj).subscribe((res: any)=>{
      this.getAllCanidates();
    })
  }


}
