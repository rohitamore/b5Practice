import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css']
})
export class MySliderComponent {

  @Input() imagesArray: string[]= [];
}
