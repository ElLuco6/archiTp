import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit{
  produits$:Observable<any[]> = new Observable<any[]>();
  loading = true
  constructor(public http: HttpClient,
              public ProduitService:ProduitService){

  }
  
  ngOnInit(): void {
   this.produits$ =  this.ProduitService.getProduit()
   this.produits$.subscribe(data=>{
    if(data.length > 900){
      this.loading = false
    }
   })
  }
}
