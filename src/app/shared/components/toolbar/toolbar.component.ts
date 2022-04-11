import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  @Input()
  visibleButtonUser = true
  @Input()
  visibleButtonCaret = true
  visibleShoppingList = true
  constructor() { }

  ngOnInit(): void {
  }

}
