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

  isHoverProduct(product: IProduct, status: boolean) {
    product['isHover'] = status;
  }

  onClick(event: MouseEvent) {
    this.click.emit(event);
  }
}
