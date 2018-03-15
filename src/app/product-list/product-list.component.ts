import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.interface';

@Component({
  selector: 'v-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  newTitle = 'new title';
  products: IProduct[] = [
    { title: 'apple'},
    { title: 'orange'},
    { title: 'banana'},
    { title: 'apricot'},
    { title: 'pear'},
    { title: 'melon'},
  ];
  private _isTitleVisible = true;

  constructor() { }

  ngOnInit() {
  }

  get isTitleVisible(): boolean {
    return this._isTitleVisible;
  }
  set isTitleVisible(visible: boolean) {
    console.log('title visibility changed to ', visible);
    this._isTitleVisible =  visible;
  }

  addProduct() {
    this.products.push({title: this.newTitle});
    this.newTitle = '';
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
    // To filter by title >>>
    // this.products = this.products.filter((product, i) => index === i);
  }

}
