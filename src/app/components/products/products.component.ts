import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsArray: any [] = [];
  categoryArray: any[]=[];
  productObj: any = {
    "ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": "2023-05-09T02:10:59.407Z",
    "DeliveryTimeSpan": "",
    "CategoryId": 0,
    "ProductImageUrl": ""
  };
  constructor(private http: HttpClient) {
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts() {
    debugger;
    this.http.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts").subscribe((result: any)=>{
        debugger;
        this.productsArray = result.data;
    })
  }
  getAllCategory() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory").subscribe((result: any)=>{
      debugger;
      this.categoryArray = result.data;
  })
  }

  createProduct() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Ecomm/CreateProduct", this.productObj).subscribe((res: any)=>{
      this.getAllProducts();
    })
  }
}
