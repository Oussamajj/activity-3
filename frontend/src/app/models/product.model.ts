/**
 * Modèle de données d'un produit (côté frontend).
 * Correspond exactement à l'entité Product du backend Spring Boot.
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  selected: boolean;
}
