import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products/products.component';
import { EditComponent } from './edit/edit/edit.component';
import { CreateComponent } from './create/create/create.component';


const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'products', component: ProductsComponent},
  {path:'create', component: CreateComponent},
  {path:'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
