import { useState } from 'react'
import { useCart } from "../../components/CartContext";

import Navbarpages from "../../components/Navbar/Navbarpages";

const Cart = () => {
    const [cupom, setCupom] = useState('')
    const cart = useCart();
    const remove = (id) => () => {
      cart.removeFromCart(id);
    };
    let id = 0
    let subTotal = 0;
    console.log(cart.cart)
    /* Object.keys(cart.cart).map((key) => {
      const product = cart.cart[key];
      return Object.keys(product.prices).map((key) => {
        const price = product.prices;
        subTotal += price[key].price * product.quantity;
        id = product.id;
        return subTotal;
      });
    }); */
  
    /* let total = 0;
    let bool = false;
    const AplicarCupom = () => {
      Cupons.map((key) => {
        if(key === cupom){
          bool = true
          total = subTotal-(subTotal*0.2)
        }
        return total
      })
    } */

    return(
        <main className="container">
          <Navbarpages />
          <section className="cart">

          </section>
        </main>
    )
}

export default Cart;