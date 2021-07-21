import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Models
import { Product } from '../models/Product';

//Others imports
import { Global } from '../services/global';

@Injectable()

export class ProductService
{
    public url: string;

    constructor(
        private _http: HttpClient
    )
    {
        this.url = Global.url;
    }


    testServiceMethod(){
        return "Todo va jalando bien";
    }

    getProducts():Observable<any>{

        let headers = new HttpHeaders().set('Content-type', 'application/json');
    
        return this._http.get(this.url+'products', {headers:headers});    
    
    }

    getProductsTypes():Observable<any>{

        let headers = new HttpHeaders().set('Content-type', 'application/json');
    
        return this._http.get(this.url+'types', {headers:headers});    
    }

    addProduct(product:Product):Observable<any>
    {
        let params = JSON.stringify(product);

        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url+'create', params, {headers:headers});
    }

    getProduct(id):Observable<any>{

        let headers = new HttpHeaders().set('Content-type', 'application/json');
    
        return this._http.get(this.url+'product?Id='+id, {headers:headers});    
    
    }

    deleteProduct(id):Observable<any>{

        let headers = new HttpHeaders().set('Content-type', 'application/json');
    
        return this._http.delete(this.url+'delete?Id='+id, {headers:headers});  
    
    }

    updateProduct(product:Product):Observable<any>
    {
        let params = JSON.stringify(product);

        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.put(this.url+'update', params, {headers:headers});
    }












}