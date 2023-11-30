import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { PanierComponent } from './panier/panier.component';
import { ValidationPanierComponent } from './validation-panier/validation-panier.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ListProduitComponent,
    ProduitDetailComponent,
    PanierComponent,
    ValidationPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
