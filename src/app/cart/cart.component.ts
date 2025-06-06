import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  line_total: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  userId: number = 1; // Hardcoded for now
  grandTotal: number = 0;
  orderPlaced: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCartItems();
  }

  fetchCartItems() {
    this.http.get<{cart: CartItem[], grand_total: number}>(`http://localhost:5000/carts?userId=${this.userId}`)
      .subscribe(res => {
        this.cartItems = res.cart;
        this.grandTotal = parseFloat(res.grand_total as any);
      });
  }

  updateQuantity(item: CartItem, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) return;
    this.http.put<{message: string}>(`http://localhost:5000/carts/${item.id}`, { quantity: newQuantity })
      .subscribe(() => {
        this.fetchCartItems();
      });
  }

  removeItem(item: CartItem) {
    this.http.delete<{message: string}>(`http://localhost:5000/carts/${item.id}`)
      .subscribe(() => {
        this.fetchCartItems();
      });
  }

  calculateGrandTotal() {
    this.grandTotal = this.cartItems.reduce((sum, item) => sum + item.line_total, 0);
  }

  placeOrder() {
    this.http.post<{message: string, order_id: number}>(`http://localhost:5000/orders?userId=${this.userId}`, {})
      .subscribe(res => {
        this.orderPlaced = true;
        this.cartItems = [];
        this.grandTotal = 0;
      });
  }
}