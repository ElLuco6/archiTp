import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss'],
})
export class ProduitDetailComponent implements OnInit {
  produit: any;
  productId ="";
  constructor(public produitService: ProduitService,
              public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });

    let test = this.produitService.getProductById(this.productId);
    test.subscribe((data) => {
      this.produit = data.product;
    });
  }
}
