import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductComponent} from "../product/product.component";

interface Product {
  id: number
  name: string
  img: string
  price: number
  count: number
}

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopingListComponent implements OnInit,  DoCheck {

  allPrice: number = 0
  products: Product[]

  constructor() {
    this.products = new Array(10)

    for (let i = 0; i < this.products.length; i++) {
      this.products[i] = {
        id: i,
        name: "product" + i,
        img: "alsdfa",
        price: 100 * i,
        count: 1,
      }
    }


  }

  ngOnInit(): void {
    this.allPrice = this.subtotalPriceShoppingList()
  }



  ngDoCheck(): void {
    this.allPrice = this.subtotalPriceShoppingList()
  }

  findIndexProduct(id: number): number {
    return this.products.findIndex((value) => value.id === id)
  }

  deleteProductFromShoppingList(id: number): void {
    this.products.splice(this.findIndexProduct(id), 1)
  }

  increaseCountProduct(id: number): void {
    ++this.products[this.findIndexProduct(id)].count

  }

  decreaseCountProduct(id: number): void {
    --this.products[this.findIndexProduct(id)].count
  }

  subtotalPriceShoppingList(): number {
    let allPrice: number = 0

    for (let product of this.products) {
      allPrice += product.price * product.count
    }
    return allPrice;
  }

}
