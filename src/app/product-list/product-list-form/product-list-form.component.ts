import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { IProduct } from '../../product.interface';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'v-product-list-form',
  templateUrl: './product-list-form.component.html',
  styleUrls: ['./product-list-form.component.css']
})
export class ProductListFormComponent implements OnInit {

  @Output() submitForm: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
  }

  addProduct(field: HTMLInputElement) {
    // const title: string = field.nativeElement.value;
    this.submitForm.emit({ title: field.value});
    field.value = '';
  }

}
