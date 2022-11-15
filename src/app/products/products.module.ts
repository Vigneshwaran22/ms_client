import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  }
]

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
