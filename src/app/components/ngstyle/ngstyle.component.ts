import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {

  divWidth: number =50;
  div2Width: string = "250px";
  myColor: string = '';
  backgroundColor: string = "teal";
  myCss: any = {
    'color':'red',
    'width':'200px',
    'height':'200px',
    'background-color':'gray'
  };
  myProgress: number = 0;
}
