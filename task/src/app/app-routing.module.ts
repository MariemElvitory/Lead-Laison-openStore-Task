import { ProductIdComponent } from './product-id/product-id.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ComplexComponent } from './complex/complex.component';
import { HomeComponent } from './home/home.component';
import { SimplComponent } from './simpl/simpl.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'simpl' , component:SimplComponent},
  {path:'complex' , component:ComplexComponent},
  {path:'all' , component:AllComponent},
  {path:'id/:id' , component:ProductIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
