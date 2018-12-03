import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';
import { ShopDetailComponent } from './shop/shop-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShopComponent,
    PricesComponent,
    HomeComponent,
    ShopDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
