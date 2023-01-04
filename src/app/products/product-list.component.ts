import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle : string = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage : boolean = false;

   private _listFilter : string = '';

   get listFilter() : string{

    return this._listFilter;
   }

   set listFilter(value:string){

    this._listFilter = value;

    this.filteredProducts = this.performFilter(value);
   }

   
   filteredProducts : IProduct[] = []; 
    products : IProduct[] = [
  
    ]
    

    toggleImage() : void{
      this.showImage = !this.showImage;
    }

    performFilter(filterBy:string):IProduct[]{
      filterBy = filterBy.toLowerCase();

      return this.products.filter((product : IProduct) => product.productName.toLowerCase().includes(filterBy));
    }

    ngOnInit(): void{
      this.listFilter = 'cart'
    }

  onRatingClicked(message : string) : void{
    this.pageTitle = 'Product List: ' + message;
  }
}