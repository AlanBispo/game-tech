/* Esta página foi feita usando a técnica Mobile first, para demonstrar conhecimento sobre. */

import { Link } from "react-router-dom";

import products from "../../../products.json";
import { useProduto } from "../../DescriptionContext";
import { useCart } from "../../CartContext";

import { MdShoppingCart } from "react-icons/md";
import "./styles.css"

const Products = () => {
    const produto = useProduto();
    const list = (product) => () => {
        produto.addToDescription(product);
    };
    const cart = useCart();
    const add = (product) => () => {
    cart.addToCart(product);
  };
    return(
        <section className="products">
        {products.map((product) => {
          const titulo = product.name;
          return (
            <div className="show-products" onClick={list(product)} key={product.id}>
              <Link to="/description"><img src={product.image} alt={product.name}></img></Link>
              <div className="description">
              <Link to="/description">
                <div className="title-shop">
                  {titulo.length > 20
                    ? titulo.substring(0, 20) + "..."
                    : titulo}
                </div>
                </Link>
                <div className="title-price">Valor: R$ {product.price}</div>
                <button
                  className="btn-shop"
                  onClick={list(product) && add(product)}
                >
                  Adicionar ao Carrinho
                  <MdShoppingCart size={18} style={{ marginLeft: "5px" }} />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    );
}

export default Products;