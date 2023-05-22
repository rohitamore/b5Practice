import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private  http: HttpClient) { }

  getAllCandidates(): Observable<any> {
   return this.http.
   get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates");
  }
  saveCourse(obj: any) {
    return this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/addcourse",obj);
  }

  getCurrentYear (): Number {
    debugger;
    const currentDate =  new Date();
    const currentYear =  currentDate.getFullYear();
    return currentYear;
  }


}
