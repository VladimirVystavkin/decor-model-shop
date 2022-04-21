import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shape-triangle',
  templateUrl: './shape-triangle.component.html',
  styleUrls: ['./shape-triangle.component.sass']
})
export class ShapeTriangleComponent implements OnInit {
  @Input()
  position : string = 'top'
  @Input()
  topFlip : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  checkPosition (position:string) : boolean {
    if(position == 'top'){
      return true
    }
    if(position == 'bottom'){
      return false
    }
    return true
  }

}
