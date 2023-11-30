import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit{

  produit:any
  constructor(public produitService: ProduitService){

  }


  ngOnInit(){
    let test = this.produitService.getProductById('6565cd143dcfa1e52e8cbc1c')
   test.subscribe(data=>{
    this.produit = data
    console.log(this.produit);
    
   })
    
  }
}
