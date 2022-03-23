import { Component, OnInit } from '@angular/core';

interface Product{
  id: number
  name : string
  img : string
  price : number
  count : number
}
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.sass']
})
export class ShopingListComponent implements OnInit {




  constructor() { }


  ngOnInit(): void {
  }

}
