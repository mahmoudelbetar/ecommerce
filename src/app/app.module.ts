import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductCardComponent } from './Components/product-list/product-card/product-card.component';
import { FavouriteProductComponent } from './Components/favourite-product/favourite-product.component';
import { ProductCartComponent } from './Components/product-cart/product-cart.component';
import { SliceProductPipe } from './Pipes/slice-product.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavouriteProductComponent,
    ProductCartComponent,
    SliceProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
