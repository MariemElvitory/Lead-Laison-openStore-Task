import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  productsList:any[]=[];

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {

    this. _ProductsService.getProducts().subscribe(
      (response)=>
      {
         this.productsList=response;
         localStorage.setItem('productsList' , response);
         this. _ProductsService.getProducts();

         console.log(response)
      }
    )
  }

}
