import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CrudService } from './../../services/crud.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = {};
  constructor(private crudService: CrudService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.crudService.get("api/v1/recipes", this.route.snapshot.paramMap.get('id')).subscribe(response => {
      console.log(response)
      this.product = response;
    }, error => {
      console.log(error);
    })
  }

}
