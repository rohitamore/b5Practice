import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Output() onBtnClick = new EventEmitter<any>();

  btnClick() {
    debugger;
    this.onBtnClick.emit('hii');
  }
}
