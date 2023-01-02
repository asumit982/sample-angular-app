import {Component} from '@angular/core';
import { IProduct } from './product';

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
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
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2021",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2020",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
    ]
    

    toggleImage() : void{
      this.showImage = !this.showImage;
    }

    performFilter(filterBy:string):IProduct[]{
      filterBy = filterBy.toLowerCase();

      return this.products.filter((product : IProduct) => product.productName.toLowerCase().includes(filterBy));
    }
}