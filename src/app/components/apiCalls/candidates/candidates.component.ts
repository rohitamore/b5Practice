import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {

  candidateArray: any[]=[];
  cityList = [1,2,3,4,5]
  firstName: string = "Chetan";
  fullName:string = "chetan p jogi";
  currentDate: Date= new Date();
  productPrice: number =23.45;

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
  constructor(private masterSrv: MasterService,private router: Router,private http: HttpClient, private candidateSrv: CandidateService ){
    this.getAllCanidates();
    debugger;
    const year = this.masterSrv.getCurrentYear();
  }
  getAllCanidates() {
    this.candidateSrv.getAllCandidate().subscribe((res:any)=>{
      this.candidateArray = res.data;
    })
  }
  onClose(param: string) {
debugger;
  }
  onEdit(id: number) {
    debugger;
    this.router.navigate(['/editCandidate', id])
  }
  currentrTab: string = '';
  onTabChange(tabName: string) {
    debugger;
    this.currentrTab = tabName;
  }
  onUpdate() {
    this.candidateSrv.updateCandidate(this.candidateObj).subscribe((res: any)=>{
      this.getAllCanidates();
    })
  }

  deleteCandidate() {

  }

}
