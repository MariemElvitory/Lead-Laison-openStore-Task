import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {

  id!:number;
  productId:any={};
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute ) {
    this.id=_ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this. _ProductsService.getProductId(this.id).subscribe((response)=>{
       this.productId=response;
    })

  }

}
