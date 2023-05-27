import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent {

  candidateObj: any = {
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
  constructor(private candidateSrv: CandidateService, 
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((res: any) => {
      debugger;
      if (res.id) {
        this.candidateSrv.getCandidateById(res.id).subscribe((res: any) => {
          debugger;
          this.candidateObj = res.data;
        })
      }
    })
  }

  onUpdate() {
    this.candidateSrv.updateCandidate(this.candidateObj).subscribe((res: any) => {

    })
  }
}

