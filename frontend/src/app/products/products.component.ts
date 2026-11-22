import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  // Injection de dépendances : le service est instancié une seule fois par Angular
  constructor(private productService: ProductService) {}

  // Exécuté automatiquement au démarrage du composant
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => (this.products = data),
      error: (error) => console.error('Erreur chargement produits :', error)
    });
  }

  handleDelete(product: Product): void {
    const confirmed = confirm(
      `Êtes-vous sûr de vouloir supprimer le produit "${product.name}" ?`
    );

    if (confirmed) {
      this.productService.deleteProduct(product).subscribe({
        next: () => {
          // Une fois la suppression confirmée par le backend, on recharge la liste
          this.getAllProducts();
        },
        error: (error) => console.error('Erreur suppression produit :', error)
      });
    }
  }
}
