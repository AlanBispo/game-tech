import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Cupons from "../../resources/cupons.json";
import { useCart } from "../../components/CartContext";
import Navbarpages from "../../components/Navbar/Navbar";
import ToastAnimated, { showToast } from "../../components/Toast";

import { MdKeyboardBackspace } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cupom, setCupom] = useState("");
  const cart = useCart();
  const remove = (id) => () => {
    cart.removeFromCart(id);
  };
  const add = (id) => () => {
    cart.addFromQuantity(id);
  };
  let id = 0;
  let subTotal = 0;

  Object.keys(cart.cart).map((key) => {
    const product = cart.cart[key];
    const price = product.price;
    console.log(price);
    subTotal += price * product.quantity;
    id = product.id;
    return subTotal;
  });
  let bool = false;
  let desconto = 0;
  const AplicarCupom = () => {
    Cupons.map((key) => {
      if (key === cupom) {
        bool = true;
        desconto = subTotal * 0.2;
        subTotal = subTotal - subTotal * 0.2;
      }
      return subTotal;
    });
  };

  const handleClick = () =>
    showToast({ type: "success", message: "Pedido finalizado com sucesso" });

  return (
    
      <main className="container-cart">
        <Navbarpages />
        <section className="cart">
          <div
            className="arrow-left"
            onClick={() => {
              window.history.back();
            }}
          >
            <MdKeyboardBackspace />
          </div>
          {id === 0 ? (
            <div className="vazio">
              <h2>Oops...! Seu carrinho está vazio!</h2>
              <button className="btn-vazio">Produtos</button>
            </div>
          ) : (
            <>
            <section className="body-cart">
              <div className="menu">
                <span className="opcao">Produto:</span>
                <span className="opcao">Quantidade:</span>
                <span className="opcao">Valor:</span>
              </div>
              <section className="cart">
                {Object.keys(cart.cart).map((key) => {
                  const product = cart.cart[key];
                  return (
                    <div className="cart-item" key={key}>
                      <div className="img-cart">
                        <div className="title-img">{product.name}</div>
                        <img
                          className="img-cart-item"
                          src={product.image}
                          alt={product.title}
                        />
                        <ToastAnimated />
                      </div>
                      <span className="quantity">
                        <FaMinus className="btn-cart" onClick={remove(key)} />
                        {product.quantity}
                        <FaPlus className="btn-cart" onClick={add(key)} />
                      </span>
                      <span className="quantity">
                        R${(product.price * product.quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </section>
            </section>
            <div className="subtotal">SUBTOTAL: R$ {subTotal.toFixed(2)} </div>
            <div className="cupom">
              <div className="cupom-input">
                <label htmlFor="cup">CUPOM DE DESCONTO: </label>
                <input
                  type="text"
                  placeholder="digite um cupom válido"
                  id="cup"
                  value={cupom}
                  onChange={(ev) => setCupom(ev.target.value)}
                  onClick={AplicarCupom(cupom)}
                />
              </div>
              <span className="desconto">
                {bool === false
                  ? null
                  : `DESCONTO APLICADO: R$ ${desconto.toFixed(2)}`}
              </span>
              <span className="total">{`TOTAL: R$ ${subTotal.toFixed(2)}`}</span>
              <div className="btn-div">
                <button type="button" className="btn-total" onClick={handleClick}>
                  FECHAR PEDIDO
                </button>
              </div>
            </div>
          </>
        )}
        
      </section>
    </main>
  );
};

export default Cart;
