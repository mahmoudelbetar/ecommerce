import { IProduct } from './../../../Interfaces/iproduct';
import { ProductService } from './../../../Services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: IProduct[];
  category: string = "";
  @Input() pcardData: any;

  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts();
  }

  ngOnInit(): void {

  }

  addToCart(product: IProduct): void{
    this.productService.addToCart(product);
  }

  addToFavourite(product: IProduct): void{
    this.productService.addToFavourite(product);
  }

  getProductsWithCategory(){
    this.products = this.productService.getProductsWithCategory(this.category);
  }

  getProduct(name: string){
    this.products =  this.productService.getProduct(name);
  }

}
