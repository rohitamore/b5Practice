import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clinets',
  templateUrl: './clinets.component.html',
  styleUrls: ['./clinets.component.css']
})
export class ClinetsComponent {

  packageObj: any = {
    "packageId": 0,
    "packageName": "",
    "packageCost": "",
    "packageDescription": "",
    "isPackageActive": false
  };
  packages: any[] = [];
  constructor(private http: HttpClient) {
    this.loadAllPackages();
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
      if (res.result) {
        alert("Update Success");
        this.packageObj = {
          "packageId": 0,
          "packageName": "",
          "packageCost": 0,
          "packageDescription": "",
          "isPackageActive": false
        };
        this.loadAllPackages();
      } else {
        alert(res.message)
      }
    })
  }
}
