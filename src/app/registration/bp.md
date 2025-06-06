Here is a summary of your `/register` API:

- **Endpoint:** `/register`
- **Method:** POST
- **Purpose:** Registers a new user in the system.

**Request Body (JSON):**
```json
{
  "name": "User Name",
  "mobile": "10_digit_mobile",
  "password": "Password@123",
  "confirm_password": "Password@123"
}
```

**Validation:**
- `name` is required.
- `mobile` must be exactly 10 digits and unique.
- `password` is required and must:
  - Be at least 8 characters,
  - Contain lowercase, uppercase, a number, and a special character.
- `password` and `confirm_password` must match.

**Process:**
- Checks if the mobile number is already registered.
- Hashes the password using bcrypt.
- Inserts the new user into the `users` table in the MySQL database.

**Response:**
- On success:  
  `{ "success": true, "message": "Registration successful. Please login." }`
- On failure:  
  `{ "success": false, "message": "Reason for failure" }`

**Note:**  
You must send a POST request (not GET) to `/register` with the JSON body as shown above.