import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  starters = [
    { name: 'Paneer Tikka', price: 180 },
    { name: 'Veg Manchurian', price: 160 },
    { name: 'Gobi 65', price: 150 },
    { name: 'Chicken 65', price: 200 },
    { name: 'Tandoori Chicken', price: 250 },
  ];

  breads = [
    { name: 'Plain Naan', price: 40 },
    { name: 'Butter Naan', price: 50 },
    { name: 'Garlic Naan', price: 60 },
    { name: 'Tandoori Roti', price: 30 },
    { name: 'Lachha Paratha', price: 55 },
  ];
  mainCourse = [
    { name: 'Paneer Butter Masala', price: 220 },
    { name: 'Chicken Curry', price: 260 },
    { name: 'Dal Makhani', price: 180 },
    { name: 'Kadai Veg', price: 200 },
  ];

  riceNoodles = [
    { name: 'Veg Fried Rice', price: 120 },
    { name: 'Chicken Biryani', price: 180 },
    { name: 'Hakka Noodles', price: 140 },
    { name: 'Jeera Rice', price: 90 },
  ];

  desserts = [
    { name: 'Gulab Jamun', price: 60 },
    { name: 'Rasmalai', price: 80 },
    { name: 'Ice Cream', price: 70 },
    { name: 'Gajar Halwa', price: 90 },
  ];
  
 beverages = [
  { name: 'Masala Chai', price: 40 },
  { name: 'Coffee', price: 50 },
  { name: 'Lassi', price: 60 },
  { name: 'Soft Drink', price: 30 },
];

} 
