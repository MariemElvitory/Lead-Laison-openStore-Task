import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  productsList:any[]=[];
  // newProductsList:any[]=[];

  constructor(private _ProductsService:ProductsService ,  private _Router:Router) { }

  ngOnInit(): void {

    this. _ProductsService.getProducts().subscribe(
      (response)=>
      {
         this.productsList=response;
        // .splice(1);
         console.log(response)

      //  this.newProductsList=this.productsList.push(JSON.stringify(this.productsList))
      }
    )

  }

  cacheProducts()
  {
    localStorage.setItem('productsList' , JSON.stringify(this.productsList));
  }





  // sync(id:number){
  //  this. _Router.navigate(['/id'])
  // }
}



