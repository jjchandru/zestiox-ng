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
  categoryOrder: { id: number, name: string, items: MenuItem[] }[] = [];
  menuData: { [key: string]: MenuItem[] } = {};
  cartCount = 0;

  // Message for item added
  itemAddedMessage = '';
  showItemAdded = false;
  itemAddedTimeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(`${environment.apiUrl}/menu-items`).subscribe(data => {
      this.categoryOrder = data; // Now an array of categories
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
        // Show item added message
        this.itemAddedMessage = `${item.name} added`;
        this.showItemAdded = true;
        if (this.itemAddedTimeout) {
          clearTimeout(this.itemAddedTimeout);
        }
        this.itemAddedTimeout = setTimeout(() => {
          this.showItemAdded = false;
        }, 1500);
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

  // Helper to split categories into rows of n
  getCategoryRows(categories: any[], perRow: number): any[][] {
    const rows = [];
    for (let i = 0; i < categories.length; i += perRow) {
      const row = categories.slice(i, i + perRow);
      while (row.length < perRow) {
        row.push(null); // pad with nulls for alignment
      }
      rows.push(row);
    }
    return rows;
  }

  // Helper to split categories into columns for vertical fill (column-major order)
  getCategoryColumns(categories: any[], perCol: number): any[][] {
    const columns: any[][] = Array.from({ length: perCol }, () => []);
    categories.forEach((cat, idx) => {
      columns[idx % perCol].push(cat);
    });
    return columns;
  }
}
