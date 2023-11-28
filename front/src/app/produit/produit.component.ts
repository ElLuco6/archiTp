import { Component, Input } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {
@Input() produit: any
constructor(public ProduitService:ProduitService){}
}
