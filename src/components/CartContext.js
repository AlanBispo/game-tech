import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  console.log(cart)
  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);

  const addToCart = (product) => {
    setCart((old) => {
      let quantity = (old[product.id]?.quantity || 0) + 1;
      const newCart = {
        ...old,
        [product.id]: {
          ...product,
          quantity,
        },
      };
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    const newCart = {};
    Object.keys(cart).forEach((id) => {
      if (id !== productId) {
        newCart[id] = cart[id];
      } else if (cart[id].quantity > 1) {
        newCart[id] = { ...cart[id], quantity: cart[id].quantity - 1 };
      }
      setCart(newCart);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
