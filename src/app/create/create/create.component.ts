import { Component, OnInit } from '@angular/core';

//Services
import { ProductService } from '../../services/product.service';

//Models
import { Product } from '../../models/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ ProductService]
})
export class CreateComponent implements OnInit {

  public isSuccess: boolean;
  public product: Product;
  public productTypes: any;

  constructor(private _productSevice: ProductService,
    private _router:Router,
    private _route:ActivatedRoute) 
  {
    this.isSuccess = false;
    this.product = new Product();
    this.product.Name = "";
    this.product.Price = 1.0;
    this.product.Company = "";
    this.product.AgeRestriction = 1;
    this.product.Description = "";
    this.product.ProductTypeId = 0;
  }

  ngOnInit() {
    this.getProductsType();
  }


  createProduct(form)
  {
    this._productSevice.addProduct(this.product).subscribe(response =>{
      console.log(response);
      this.isSuccess = true;
      form.reset();
      this._router.navigate(['/products']);
    },
    error=>{
      console.log(error);
    }
    );    
  }


  getProductsType(){
    this._productSevice.getProductsTypes().subscribe(
      response => {
        this.productTypes = response.products;
      },
      error => {
        console.log(error);
      }
    )
  }

}
