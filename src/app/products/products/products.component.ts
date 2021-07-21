import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Services
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductService]
})
export class ProductsComponent implements OnInit {

  public TitleTest: string;
  public products: any;
  public confirmDeletion:boolean;
  public id:number = 0;

  constructor(
    private _productSevice: ProductService,
    private _router:Router,
    private _route:ActivatedRoute
  )
  {
    this.confirmDeletion = false;
  }

  ngOnInit() 
  {
    this.GetProductsList();
  }


  GetProductsList(){
    // this.TitleTest = this._productSevice.testServiceMethod();
    this._productSevice.getProducts().subscribe(response =>{
      console.log(response);
      this.products = response.products;
    },
    error=>{
      console.log(error);
    }
    );
  }


  deleteProduct(id)
  {
    this._productSevice.deleteProduct(id).subscribe(response =>{
      console.log(response);
      this.confirmDeletion = false;
      this.GetProductsList();
    },
    error=>{
      console.log(error);
    }
    );
  }

  setConfirm(confirm:boolean, id)
  {
    this.id = id;
    this.confirmDeletion = confirm;
  }










}
