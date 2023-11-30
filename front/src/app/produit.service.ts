import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  cart:any[] =[]
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
  readonly STORAGE_KEY = 'your_cart_key';
  private readonly API_URL = 'https://postman-rest-api-learner.glitch.me/'; 

  constructor(public http: HttpClient) {
    this.loadCartFromStorage();
   }

  getProduit(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/product/');
  }
  getTotalCost(): number {
    const cartItems = this.cartItemsSubject.value;

    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  addToCart(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
    this.saveCartToStorage(updatedItems);
    this.getTotalCost();
  }

  removeFromCart(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedItems);
    this.saveCartToStorage(updatedItems);
    this.getTotalCost();
  }

  loadCartFromStorage(): void {
    const storedCart = localStorage.getItem(this.STORAGE_KEY);
    const cartData = storedCart ? JSON.parse(storedCart) : [];
    this.cartItemsSubject.next(cartData);
  }
  saveCartToStorage(cartData: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cartData));
  }

  sendCartToServer(): Observable<any> {
    const cartData = this.cartItemsSubject.value;

    return this.http.post<any>(this.API_URL, { cart: cartData });
  }
}
