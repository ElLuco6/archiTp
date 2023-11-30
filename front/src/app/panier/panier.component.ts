import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit{
  cart$: Observable<any[]> = new Observable<any[]>();
  totalCost: Observable<number> = new Observable<number>();

constructor(public ProduitService: ProduitService){

}
  ngOnInit(){
this.cart$ = this.ProduitService.cartItems$
this.totalCost = this.ProduitService.totalCost$;

  }
  

  sendCartToServer(): void {
    this.ProduitService.sendCartToServer().subscribe(
      (response) => {
        console.log('Cart sent successfully:', response);
        // Optionally, you can handle the response from the server
      },
      (error) => {
        console.error('Error sending cart:', error);
        // Handle the error as needed
      }
    );
  }
}
