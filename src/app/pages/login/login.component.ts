import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {
  }
  loginObj: any= {
    username:'',
    password: ''
  }

  onLogin() {
    if(this.loginObj.username == "admin" && this.loginObj.password == "1234") {
      localStorage.setItem("loggedinUser",this.loginObj.username);
      this.router.navigateByUrl("candidates");
    } else {
      alert("Username or password is not correct")
    }
  }
}
