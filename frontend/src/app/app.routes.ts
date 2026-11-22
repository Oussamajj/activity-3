import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Chemin utilisé dans la vidéo
  { path: 'prods', component: ProductsComponent },
  // Alias plus lisible
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
