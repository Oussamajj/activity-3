# Gestion des Produits — Angular 19 + Spring Boot

Projet réalisé par **Oussama**, inspiré de la vidéo *« Bases de Angular 19 - Demo et Concepts de base »*.
Le nom affiché dans l'application est **Oussama** (et non celui du formateur).

## Structure

```
activity-3/
├── frontend/     # Application Angular 19 (standalone components)
└── backend/      # API REST Spring Boot + H2 (port 8083)
```

## Concepts illustrés (ceux de la vidéo)

| Concept | Où le retrouver |
|---|---|
| Composants standalone | `frontend/src/app/home`, `frontend/src/app/products` |
| Routage (`routerLink`, `router-outlet`) | `app.routes.ts`, `app.component.html` (routes `/home` et `/prods`) |
| Data binding / interpolation | `{{ products.length }}`, `{{ p.name }}` |
| Nouveau moteur de template (`@for`, `@if`, `@empty`) | `products.component.html` |
| `OnInit` / `ngOnInit` | `products.component.ts` |
| Modèle TypeScript | `frontend/src/app/models/product.model.ts` |
| Service + injection de dépendances | `frontend/src/app/services/product.service.ts` |
| `HttpClient`, `Observable`, `subscribe({next, error})` | `product.service.ts`, `products.component.ts` |
| `provideHttpClient()` | `frontend/src/app/app.config.ts` |
| Bootstrap + Bootstrap Icons | `frontend/src/styles.css` |
| REST controller, Spring Data JPA, **CORS** | `backend/.../rest/ProductRest.java` |

## Lancer le projet

### 1. Backend (port 8083)

```bash
cd backend
mvn spring-boot:run
```

L'API est alors disponible sur :

- `GET  http://localhost:8083/products` → liste des produits
- `GET  http://localhost:8083/products/1` → un produit
- `DELETE http://localhost:8083/products/1` → suppression
- Console H2 : `http://localhost:8083/h2-console` (JDBC URL : `jdbc:h2:mem:productsdb`, user `sa`)

### 2. Frontend (port 4200)

```bash
cd frontend
npm install      # une seule fois
npm start
```

Ouvrir ensuite <http://localhost:4200>.

> 💡 Si le backend n'est pas démarré, le service utilise automatiquement trois produits
> de démonstration en local : l'interface reste fonctionnelle.

## Suppression

Le bouton **Delete** affiche une confirmation (`confirm()`), appelle `DELETE /products/{id}`,
puis recharge la liste via `getAllProducts()` — exactement comme dans la démo.
