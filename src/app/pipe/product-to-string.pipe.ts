import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../product.interface';

@Pipe({
  name: 'productToString'
})
export class ProductToStringPipe implements PipeTransform {

  transform(product: IProduct, args?: any): any {
    // return `${product.title} ${product['isHover'] ? '(Hover)' : ''}`;
    return `${product.title}`;
  }

}
