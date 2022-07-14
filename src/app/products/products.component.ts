import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../services/crud.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.get_list("api/v1/recipes").subscribe(response => {
      this.products = response;
    }, error => {
      console.log(error)
    })
  }

  view_detail(product_id) {
    this.router.navigate(['/products/product', product_id]);
  }
}
