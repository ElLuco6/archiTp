import { Component, Input } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {
@Input() produit: any
hideContent:boolean
constructor(public ProduitService:ProduitService,
  private router: Router){
            this.hideContent = this.router.url.includes('/panier');
            }
}
