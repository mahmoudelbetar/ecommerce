import { IProduct } from './../Interfaces/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[];
  cart: IProduct[] = [];
  favouriteCart: IProduct[] = [];
  counter: number;
  totalPrice: number;
  prices: number[] = [];
  category?: string;
  constructor() {
    this.totalPrice = 0;
    this.counter = 0;
    this.products = [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://picsum.photos/200/300?random=20",
        "rating": {
        "rate": 3.9,
        "count": 120
        }
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://picsum.photos/200/300?random=19",
        "rating": {
        "rate": 4.1,
        "count": 259
        }
        },
        {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "jewelery",
        "image": "https://picsum.photos/200/300?random=18",
        "rating": {
        "rate": 4.7,
        "count": 500
        }
        },
        {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "jewelery",
        "image": "https://picsum.photos/200/300?random=17",
        "rating": {
        "rate": 2.1,
        "count": 430
        }
        },
        {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://picsum.photos/200/300?random=16",
        "rating": {
        "rate": 4.6,
        "count": 400
        }
      }
    ];
  }

  getAllProducts(){
    return this.products;
  }

  addToCart(product: IProduct){
    this.cart.push(product);
    this.getTotalPrice();
  }

  addToFavourite(product: IProduct): void{
    this.favouriteCart.push(product);
  }

  getTotalPrice(){
    this.prices = this.cart.map((product) => product.price);
    return this.prices.reduce((a, b) => a + b, 0);
  }

  getProductsWithCategory(category: string){
    if(category === "All"){
      return this.products;
    }
    return this.products.filter(product => product.category == category);
  }

  getProduct(name: string){
    let regex = new RegExp(name, 'ig');
    return this.products.filter((product) => product.title.match(regex));
  }


}
