import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-simpl',
  templateUrl: './simpl.component.html',
  styleUrls: ['./simpl.component.scss']
})
export class SimplComponent implements OnInit {

  simplProducts:any[]=[];

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {

    this. _ProductsService.getProducts().subscribe(
      (response)=>
      {
         this.simplProducts=response;
         console.log(response)
      }
    )
  }

}
