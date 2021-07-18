import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import * as internal from "assert";

export class Product
{
    constructor(
        public Id: number,
        public  Name: string,
        public Description: string,
        public AgeRestriction: number,
        public Company: string,
        public Price: number
    ){}

    
}