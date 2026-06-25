##  Inventory Management

```
inventory-management/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   └── Product.js
│
├── routes/
│   ├── authRoutes.js
│   ├── adminRoutes.js
│   └── productRoutes.js
│
├── middleware/
│   ├── isLoggedIn.js
│   └── isAdmin.js
│
├── controllers/
│   ├── authController.js
│   └── productController.js
│
├── views/
│   │
│   ├── login.ejs
│   │
│   ├── partials/
│   │   ├── navbar.ejs
│   │   └── sidebar.ejs
│   │
│   ├── admin/
│   │   ├── dashboard.ejs
│   │   ├── products.ejs
│   │   ├── addProduct.ejs
│   │   └── editProduct.ejs
│   │
│   └── staff/
│       └── dashboard.ejs
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── package.json
│
└── app.js
```