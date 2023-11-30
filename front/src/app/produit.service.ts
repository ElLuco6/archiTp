import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  cart: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
  private totalCostSubject = new BehaviorSubject<number>(0);
  totalCost$: Observable<number> = this.totalCostSubject.asObservable();
  readonly STORAGE_KEY = 'your_cart_key';
  private readonly API_URL = 'https://postman-rest-api-learner.glitch.me/';
  private readonly JSON_FILE_URL = '../assets/fake.json';

  constructor(public http: HttpClient) {
    this.loadCartFromStorage();
  }

  getProduit(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/product/').pipe(
      map((response) => response.products),
      catchError((error) => {
        console.error('Error getting products:', error);
        throw error;
      })
    );
  }
  getProductById(productId: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/product/' + productId);
  }

  getTotalCost(cartItems: any[]): void {
    const totalCost = cartItems.reduce((total, item) => total + item.price, 0);
    this.totalCostSubject.next(totalCost);
  }

  addToCart(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
    this.saveCartToStorage(updatedItems);
    this.getTotalCost(updatedItems);
  }

  removeFromCart(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedItems);
    this.saveCartToStorage(updatedItems);
    this.getTotalCost(updatedItems);
  }

  loadCartFromStorage(): void {
    const storedCart = localStorage.getItem(this.STORAGE_KEY);
    const cartData = storedCart ? JSON.parse(storedCart) : [];
    this.cartItemsSubject.next(cartData);
    this.getTotalCost(cartData);
  }
  saveCartToStorage(cartData: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cartData));
  }

  sendCartToServer(): Observable<any> {
    const cartData = this.cartItemsSubject.value;

    return this.http.post<any>('http://localhost:3000/order/', {
      items: cartData,
    });
  }
}
