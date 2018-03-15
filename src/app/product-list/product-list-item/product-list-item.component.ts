import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../product.interface';

@Component({
  selector: 'v-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {

  @Input()
  product: IProduct;

  @Input()
  index: number;

  @Input()
  odd: boolean;

  @Output()
  click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  toggleHoverProduct() {
    this.product['isHover'] = !this.product['isHover'];
  }

  onClick(event: MouseEvent) {
    this.click.emit(event);
  }

  getProductClass() {
    return {
      'hover-item': this.product['isHover']
    };
  }
}
