import { IProduct } from './../../Interfaces/iproduct';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.css']
})
export class FavouriteProductComponent implements OnInit {

  favCart: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.favCart = productService.favouriteCart;
  }

  ngOnInit(): void {
  }

}
