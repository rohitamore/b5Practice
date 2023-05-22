import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  apiUrl: string = "http://onlinetestapi.gerasim.in/api/OnlineTest/";
  constructor(private http: HttpClient) { }

  getAllCandidate():  Observable <any> {
    return this.http.get(this.apiUrl +"GetAllCandidates");
  }
  getCandidateById(id: number):  Observable <any> {
    return this.http.get(this.apiUrl +"GetCandidateById?id="+ id);
  }

  saveCandidate(obj: any):  Observable <any>  {
    return this.http.post(this.apiUrl +"addcandidate",obj)
  }

  updateCandidate(obj: any) :  Observable <any> {
    return this.http.post(this.apiUrl +"UpdateCandiadte", obj)
  }

  deleteCandidate(obj: any) :  Observable <any>{
    return this.http.post(this.apiUrl +"DeleteCandidate",obj);
  }

}
