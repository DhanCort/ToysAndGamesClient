import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Services
import { ProductService } from '../../services/product.service';

//Models
import { Product } from '../../models/Product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ ProductService]
})
export class EditComponent implements OnInit {

  public productToEdit: Product= new Product(1, "", "", 0, "", 1);

  constructor(private _productSevice: ProductService,
    private _router:Router,
    private _route:ActivatedRoute
    ) 
    { }

  ngOnInit()
  {
    this._route.params.subscribe(params=>{
      let id = params.id;

      this.getProduct(id);
    });
  }

  getProduct(id){
    this._productSevice.getProduct(id).subscribe(response =>{
      console.log(response.products);
      this.productToEdit.Name = response.products.name;
      this.productToEdit.Price = response.products.price;
      this.productToEdit.Company = response.products.company;
      this.productToEdit.AgeRestriction = response.products.ageRestriction;
      this.productToEdit.Description = response.products.description;

    },
    error=>{
      console.log(error);
    }
    );
  }

  updateProduct(form){
    console.log("Update product method waiting to be implemented");
  }

}
