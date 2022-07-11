import { IProduct } from './../../Interfaces/iproduct';
import { ProductService } from './../../Services/product.service';
import { AfterViewInit, asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  cart: IProduct[];
  counter: number;
  totalPrice: number;
  constructor(private productService: ProductService) {
    this.totalPrice = 0;
    this.cart = productService.cart;
    this.counter = productService.counter;
  }

  getTotalPrice(){
    return this.productService.getTotalPrice();
  }

  ngOnInit(): void {

  }

}

