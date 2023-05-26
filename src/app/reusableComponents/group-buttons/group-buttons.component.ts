import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group-buttons',
  templateUrl: './group-buttons.component.html',
  styleUrls: ['./group-buttons.component.css']
})
export class GroupButtonsComponent {

  @Input() tabs: string [] = [];

  @Output() tabChanged = new EventEmitter<string>();

  activatedTabName: string = '';

  selectTab(tabName: string) {
    this.activatedTabName =  tabName;
    debugger
    this.tabChanged.emit(this.activatedTabName);
  }
}
