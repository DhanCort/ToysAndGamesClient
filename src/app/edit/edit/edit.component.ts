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

  public isSuccess: boolean;
  public productToEdit: Product= new Product();
  public productTypes: any;

  constructor(private _productSevice: ProductService,
    private _router:Router,
    private _route:ActivatedRoute
    ) 
    {
      this.isSuccess = false;      
    }

  ngOnInit()
  {
    this._route.params.subscribe(params=>{
      let id = params.id;

      this.getProduct(id);
    });

    this.getProductsType();
  }

  getProduct(id){
    this._productSevice.getProduct(id).subscribe(response =>{
      console.log(response.products);
      this.productToEdit.Id = response.products.id;
      this.productToEdit.Name = response.products.name;
      this.productToEdit.Price = response.products.price;
      this.productToEdit.Company = response.products.company;
      this.productToEdit.AgeRestriction = response.products.ageRestriction;
      this.productToEdit.Description = response.products.description;
      this.productToEdit.ProductTypeId  = response.products.productTypeId;
    },
    error=>{
      console.log(error);
    }
    );
  }

  updateProduct(form){
    this._productSevice.updateProduct(this.productToEdit).subscribe(
      response =>{
        this.isSuccess = true;
        this._router.navigate(['/products']);
      },
      error => {

      }
    );
  }

  getProductsType(){
    this._productSevice.getProductsTypes().subscribe(
      response => {
        console.log("Types desde edit ")
        this.productTypes = response.products;
        console.log("Objeto de respuesta con id");
        console.log(this.productTypes)
      },
      error => {
        console.log(error);
      }
    )
  }

}
