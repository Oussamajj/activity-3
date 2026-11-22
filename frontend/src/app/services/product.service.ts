import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Product } from '../models/product.model';

/**
 * Couche applicative : c'est ici que se font les traitements et la
 * communication avec le backend (injection de dépendances via le constructeur).
 */
@Injectable({
  providedIn: 'root' // service instancié une seule fois et disponible partout
})
export class ProductService {
  private readonly apiUrl = 'http://localhost:8083/products';

  /**
   * Données de secours : si le backend n'est pas démarré, l'application
   * reste utilisable en mode démonstration (comme au début de la vidéo).
   */
  private demoProducts: Product[] = [
    { id: 1, name: 'computer', price: 1300, quantity: 5, selected: true },
    { id: 2, name: 'printer', price: 450, quantity: 12, selected: false },
    { id: 3, name: 'smartphone', price: 850, quantity: 8, selected: true }
  ];

  constructor(private http: HttpClient) {}

  /** Récupère la liste des produits depuis le backend (Observable non bloquant). */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(() => of([...this.demoProducts]))
    );
  }

  /** Supprime le produit dont l'identifiant est passé dans l'URL. */
  deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${product.id}`).pipe(
      catchError(() => {
        // Mode démo : on supprime aussi dans la liste locale
        this.demoProducts = this.demoProducts.filter((p) => p.id !== product.id);
        return of(void 0);
      })
    );
  }
}
