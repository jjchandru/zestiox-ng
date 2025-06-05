import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface MenuItem {
  id?: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  starters: MenuItem[] = [];
  breads: MenuItem[] = [];
  mainCourse: MenuItem[] = [];
  riceNoodles: MenuItem[] = [];
  desserts: MenuItem[] = [];
  beverages: MenuItem[] = [];
  cartCount = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/menu.json').subscribe(data => {
      this.starters = data['Starters'] || [];
      this.breads = data['Indian Breads'] || [];
      this.mainCourse = data['Main Course'] || [];
      this.riceNoodles = data['Rice & Biryani'] || [];
      this.desserts = data['Desserts'] || [];
      this.beverages = data['Beverages'] || [];
    });
    this.getCartCount(); // Optionally fetch initial cart count
  }

  addToCart(item: MenuItem) {
    const payload = {
      user_id: 1, // Replace with actual user id if available
      menu_item_id: item.id,
      quantity: 1
    };
    this.http.post<any>(`${environment.apiUrl}/cart/add`, payload).subscribe({
      next: response => {
        this.getCartCount(); // Fetch the real cart count from backend after adding
      },
      error: err => {
        // Optionally show a user-friendly error message
        alert('Failed to add to cart. Please try again.');
      }
    });
  }

  getCartCount() {
    this.http.get<any>(`${environment.apiUrl}/cart/count?user_id=1`).subscribe({
      next: res => {
        this.cartCount = res.count;
      },
      error: err => {
        // Optionally handle error
        this.cartCount = 0;
      }
    });
  }
}
