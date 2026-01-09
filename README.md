# ECAFE Backend
This is built on intention to manage an university cafetaria virtually. Students can see the food items, prices and the can order through this application. However, payment gateway is not integrated yet. Student can register, login, add food items to cart, update item quantity from cart and remove any item from cart.

- Token based aujthentication is used.
- Implemented custom error handling.


## Technologies
- Node.js
- Express.js
- MongoDB as Databse

## API Endpoints
- `POST   /login`
- `POST   /register`
- `POST   /logout`
- `POST   /getAllFood`
- `POST   /add-to-cart`
- `POST   /add-to-favourite`
- `POST   /remove-from-favourite`
- `POST   /get-orders`
- `POST   /update-quantity`
- `POST   /remove-from-cart`
- `GET    /profile/:userId`