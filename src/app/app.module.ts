import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductListFormComponent } from './product-list/product-list-form/product-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
