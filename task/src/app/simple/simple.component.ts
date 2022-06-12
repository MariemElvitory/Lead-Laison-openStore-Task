
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  simpleProducts:any[]=[];

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {


   


  }




}
