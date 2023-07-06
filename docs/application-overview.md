# 💻 Application Overview

[Demo](https:)

The Audiophile Ecommerce application is an online platform that specializes in selling high-quality audio equipment and accessories. Users can browse through a wide range of products, add items to their cart, make secure payment using Stripe. The application is built using the [Stripe](https://stripe.com) payment gateway and [Strapi](https://strapi.io/) as the content management system.

## Functionality

The application provides the following key features:

- Product Catalog: Users can browse though the available products categorized by different audio equipment types such as headphones, earphones, and speakers. They can view detailed product information, including description, features, accessories, and related products.
- Shopping Cart: Users can add products to ther shopping cart, adjust quanitities, and remove items. The cart leeps track of the total order value.
- Checkout and Payment: Users can proceed to the checkout page, where they enter their shipping and billiign information. The application integrates with Stripe for secure payment proccessing, allowing users to pay using various payment methods.

## Data Model

The application includes the following data models:

- `User` : Regular users can browse products, add items to their cart, and place orders.
- Product : Represents an audio equipment product available for sale. Each product has various attributes such as name, description, price, image, and category.
- Category : Represents a product category or type, such as headphones, earphones, or speakers. Products are grouped under specifict categories.
- Cart : Represents a user's shopping cart, containing information about the products added, quantities, and the total order value
- Order : Represents a completed purchase made by a suser. It includes information such as the user, product ordered, and order total.

## Get started

Before setting up the application ensure the following prerequisites :

- Node 6.9.0 +

To set up the app execute the following commad.

```bash
git clone https://github.com/marioenpi1012/Audiophile-e-commerce.git
```

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
