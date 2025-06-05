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
    // Uncomment the next line to fetch real cart data from backend
    // this.fetchCartItems();
  }

  // Uncomment and use this method to fetch cart items from backend
  // fetchCartItems() {
  //   this.http.get<{cart: CartItem[], grand_total: number}>(`http://127.0.0.1:5000/carts?userId=${this.userId}`)
  //     .subscribe(res => {
  //       this.cartItems = res.cart;
  //       this.grandTotal = res.grand_total;
  //     });
  // }

  updateQuantity(item: CartItem, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) return;
    item.quantity = newQuantity;
    item.line_total = parseFloat(item.price) * newQuantity;
    this.calculateGrandTotal();
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.calculateGrandTotal();
  }

  calculateGrandTotal() {
    this.grandTotal = this.cartItems.reduce((sum, item) => sum + item.line_total, 0);
  }

  placeOrder() {
    this.http.post<{message: string}>('http://127.0.0.1:5000/orders', {})
      .subscribe(res => {
        this.orderPlaced = true;
        this.cartItems = [];
        this.grandTotal = 0;
      });
  }
}
