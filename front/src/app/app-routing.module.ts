import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';


const routes: Routes = [
  {
    path: 'accueil',
    component:ListProduitComponent
  },
  {
    path: 'panier',
    component:PanierComponent
  },
  {
    path: 'produit/:id',
    component:ProduitDetailComponent
  },
  {
    path: '**',
    component:ListProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
