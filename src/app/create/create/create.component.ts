import { Component, OnInit } from '@angular/core';

//Services
import { ProductService } from '../../services/product.service';

//Models
import { Product } from '../../models/Product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ ProductService]
})
export class CreateComponent implements OnInit {
  public isSuccess: boolean;
  public product: Product;

  constructor(private _productSevice: ProductService) 
  {
    this.isSuccess = false;
    this.product = new Product(1, "", "", 0, "", 1);
  }

  ngOnInit() {
  }


  createProduct(form)
  {
    this._productSevice.addProduct(this.product).subscribe(response =>{
      console.log(response);
      this.isSuccess = true;
      form.reset();
    },
    error=>{
      console.log(error);
    }
    );
    
  }

}
