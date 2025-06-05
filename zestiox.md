# Zestiox Food Delivery - Project Plan (5 Days)

This project will be implemented by 6 college students, each responsible for one major feature branch:
- **Login**
- **Register**
- **Menu**
- **Cart**
- **Orders**
- **Profile**

**Delivery Timeline:**
- **Day 1:** Complete User Interface for all features and push code to respective branches.
- **Day 2:** Integrate all branches and deploy the combined UI to the cloud for review.
- **Day 3:** Design and create all required database tables (MySQL).
- **Day 4:** Implement REST API endpoints (Flask), connect to the database, and push backend code to Git.
- **Day 5:** Final integration of frontend and backend, full system testing, and deploy the complete app to the cloud.

---

# Architecture

Zestiox has to be built with a modern, scalable architecture:

- **Frontend:** Angular (TypeScript) for a responsive, dynamic user interface.
- **Backend:** Python with Flask for RESTful APIs and business logic.
- **Database:** MySQL (accessed via Python) for reliable and scalable data storage.

---

# Starter Projects

- **Angular Frontend Skeleton:** [github.com/jjchandru/zestiox-ng](https://github.com/jjchandru/zestiox-ng)
- **Python Flask Backend Skeleton:** [github.com/jjchandru/zestiox-backend-py](https://github.com/jjchandru/zestiox-backend-py)

---

# Zestiox Food Delivery App – Features & User Guide

Welcome to Zestiox, a modern and responsive food ordering app designed for a seamless experience on both mobile and desktop devices. This guide explains each feature and screen, with visual references and detailed descriptions of their behavior and layout.

---

## Login

![Desktop Login](desktop-login.png)
![Mobile Login](mobile-login.png)

- **Purpose:** Allows users to securely access their Zestiox account.
- **Fields:**
  - Mobile number (10 digits)
  - Password
- **Features:**
  - Validation for required fields and correct mobile number format.
  - Error alert for invalid credentials (“Invalid mobile number or password”).
  - Link to registration for new users.
- **Responsiveness:**
  - On desktop, the login form is left-aligned and compact.
  - On mobile, the form is full-width and easy to use with touch.
  - Navigation bar appears at the bottom on mobile and at the top on desktop.
- **Navigation:**
  - Before login, only Login and Register links are visible in the navigation bar. Menu, Cart, Orders, and Profile links are hidden.
  - After successful login, Login and Register links are hidden, and Menu, Cart, Orders, and Profile links become visible.

---

## Register

![Desktop Register](desktop-register.png)
![Mobile Register (Top)](mobile-registration-top.png)
![Mobile Register (Bottom)](mobile-registration-bottom.png)

- **Purpose:** Enables new users to create an account.
- **Fields:**
  - Name  
    - Required. Cannot be empty.
  - Mobile number (10 digits)  
    - Required. Must be exactly 10 digits (0-9).
  - Password  
    - Required. Must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, one number, and one special character.
  - Confirm Password  
    - Required. Must match the password field exactly.
- **Features:**
  - Real-time validation and error messages for each field.
  - Validation error messages must be displayed when the user leaves a form field (on blur) and while the user is typing in the field (on input).
  - The validation error message must disappear only when there are no validation issues for that field.
  - Success alert after registration with a direct link to login.
- **Responsiveness:**
  - On desktop, the form is split into two columns for efficient use of space.
  - On mobile, the form stacks vertically for easy scrolling and input.
  - Navigation adapts to device: bottom bar for mobile, top bar for desktop.
- **Navigation:**
  - Before login, only Login and Register links are visible in the navigation bar. Menu, Cart, Orders, and Profile links are hidden.
  - After successful login, Login and Register links are hidden, and Menu, Cart, Orders, and Profile links become visible.

---

## Menu

![Desktop Menu](desktop-menu.png)
![Mobile Menu](mobile-menu.png)

- **Purpose:** Displays the food menu, organized by categories (e.g., Starters, Indian Breads).
- **Features:**
  - Each menu item shows its name and price.
  - Add-to-cart icons for each item (interactive in the full app).
  - The add-to-cart plus icon must change to blue and the mouse pointer must change to pointer to indicate it is clickable.
  - Minimal spacing and clean layout for easy browsing.
- **Responsiveness:**
  - On desktop, menu categories are shown in columns (e.g., three columns for different sections).
  - On mobile, categories stack vertically for easy thumb navigation.
  - Navigation bar location adapts to device.
- **Navigation:**
  - Menu is only accessible after successful login. Menu, Cart, Orders, and Profile links are visible in the navigation bar after login. Login and Register links are hidden.

---

## Cart

![Desktop Cart](desktop-cart.png)
![Mobile Cart](mobile-cart.png)

- **Purpose:** Allows users to review and manage items before placing an order.
- **Features:**
  - List of items with name, quantity controls (plus/minus), price, line total, and remove (trash) icon.
  - Clicking the plus and minus icons must dynamically change the quantity without page reload.
  - Clicking the plus and minus icons must also update the line total and grand total instantly, without reloading the page.
  - Grand total displayed at the bottom.
  - “Place Order” button for proceeding to checkout.
- **Responsiveness:**
  - On desktop, the cart is shown in a narrower column aligned to the left for focus.
  - On mobile, the cart uses the full width for easy interaction.
  - Navigation bar adapts to device.
- **Navigation:**
  - Cart is only accessible after successful login. Menu, Cart, Orders, and Profile links are visible in the navigation bar after login. Login and Register links are hidden.

---

## Orders

![Desktop Orders](desktop-orders.png)
![Mobile Orders](mobile-orders.png)

- **Purpose:** Shows the user’s past and current orders with status.
- **Features:**
  - Each order displays a list of items, order date, total amount, status badge (color-coded: Preparing, On the way, Delivered, Cancelled), and a cancel button (if applicable).
  - Orders are visually separated with subtle dividers for clarity.
- **Responsiveness:**
  - On desktop, orders are shown in a central column for readability.
  - On mobile, orders use the full width and are easy to scroll.
  - Navigation bar adapts to device.
- **Navigation:**
  - Orders are only accessible after successful login. Menu, Cart, Orders, and Profile links are visible in the navigation bar after login. Login and Register links are hidden.

---

## Profile

![Desktop Profile](desktop-profile.png)
![Mobile Profile](mobile-profile.png)

- **Purpose:** Displays the user’s account details.
- **Features:**
  - Shows name, mobile number, and masked password.
  - Clean card layout for easy reading.
- **Responsiveness:**
  - On desktop, the profile card is centered and uses a moderate width.
  - On mobile, the card is full-width and easy to read.
  - Navigation bar adapts to device.
- **Navigation:**
  - Profile is only accessible after successful login. Menu, Cart, Orders, and Profile links are visible in the navigation bar after login. Login and Register links are hidden.

---

## General Responsiveness & Navigation

- Zestiox is fully responsive, providing an optimal experience on both mobile and desktop devices.
- Navigation bars automatically switch between a bottom bar (mobile) and a top bar (desktop), always highlighting the current screen.
- All forms and lists are designed for easy touch or mouse interaction, with clear feedback and accessible controls.

---

For a visual reference, see the included screenshots for each screen in both desktop and mobile modes.