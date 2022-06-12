import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {

  complexProducts:any[]=[];

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {

    this. _ProductsService.getProducts().subscribe(
      (response)=>
      {
         this.complexProducts=response;
         console.log(response)
      }
    )


  }

}
