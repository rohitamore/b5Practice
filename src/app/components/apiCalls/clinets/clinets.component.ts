import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-clinets',
  templateUrl: './clinets.component.html',
  styleUrls: ['./clinets.component.css']
})
export class ClinetsComponent {

  message : string = "";
  showAlert: boolean= false;
  messageType: string = '';
  sliderImage: string[]= [
    "https://im.indiatimes.in/content/2020/Jan/1_5e33f98fc7cd6.jpg?w=1200&h=900&cc=1",
    "https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg",
    "https://www.hindustantimes.com/ht-img/img/2023/04/24/550x309/PTI04-23-2023-000079B-0_1682339869886_1682339945777.jpg"
  ]
  
  packageObj: any = {
    "packageId": 0,
    "packageName": "",
    "packageCost": "",
    "packageDescription": "",
    "isPackageActive": false
  };
  packages: any[] = [];
  constructor( private masterService : MasterService,private http: HttpClient) {
    this.loadAllPackages();
    debugger;
    this.loadCandidates();
    const CurrentYer =  this.masterService.getCurrentYear();
    debugger;
  }
  loadCandidates() {
    this.masterService.getAllCandidates().subscribe(res=>{
      debugger;
    })
  }

  loadAllPackages() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages")
    .subscribe((res: any) => {
      this.packages = res.data;
    })
  }
  onEdit(id: number) {
    debugger;
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetPackgeById?id=" + id)
    .subscribe((res: any) => {
      this.packageObj = res.data;
    })
  }
  onDelete(id: number) {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/DeletePackgeById?id=" + id,{})
    .subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Delete Success");
        this.loadAllPackages();
      } else {
        alert(res.message)
      }
    })
  }
  onUpdate() {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/UpdatePackge", this.packageObj)
    .subscribe((res: any) => {
      debugger;
      this.message = res.message;
      this.showAlert = true;
      if (res.result) {
        this.messageType = "success";
        this.packageObj = {
          "packageId": 0,
          "packageName": "",
          "packageCost": 0,
          "packageDescription": "",
          "isPackageActive": false
        };
        this.loadAllPackages();
      } else {
        this.messageType = "danger";
      }
      setTimeout(() => {
        this.showAlert = false;
        this.message = '';
        this.messageType = '';
      }, 5000);
    }, error=>{
      this.message = JSON.stringify(error) ;
      this.showAlert = true;
      this.messageType = "danger";
    })
  }
}
