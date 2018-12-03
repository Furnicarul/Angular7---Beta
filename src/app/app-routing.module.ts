import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full',
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'prices',
    component: PricesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
