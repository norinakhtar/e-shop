import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import SignInForm from "./SignInForm";
import SignupForm from "./Signup";
import Auth from "./Auth";

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [signInForm, setSignInForm] = useState({});
  const [signUpForm, setSignUpForm] = useState({});
  const [auth, setAuth] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    let commerceCart = await commerce.cart.retrieve();
    console.log({ cart }, "cartcart");
    setCart(commerceCart);
    console.log("fetch cart");
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log("onaddcart-----------", item);
    setCart(item);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    console.log({ response }, "response");

    setCart(response);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  console.log(products, "products");
  console.log(cart, "cart in appjs");

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path="/">
            <Auth auth={auth} />
          </Route>

          <Route exact path="/products">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
