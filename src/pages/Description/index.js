import { useProduto } from "../../components/DescriptionContext";
import { useCart } from "../../components/CartContext";

import Navbarpages from "../../components/Navbar/Navbarpages";
import { MdShoppingCart, MdKeyboardBackspace } from "react-icons/md";

import "./styles.css";

const Description = () => {
  const cart = useCart();
  const produto = useProduto();
  const add = (comic) => () => {
    cart.addToCart(comic);
  };
  console.log(produto.produto);
  const games = produto.produto;
  return (
    <main className="container">
      <Navbarpages />
      <section className="description">
        <div className="description-item">
          <h1 className="title">{games.name}</h1>
          <img className="img" src={games.image} alt={games.name} />
          <span className="price">Preço: R$ {games.price}</span>
          <button className="btn-dscpt" onClick={add(produto.produto)}>
            Adicionar ao Carrinho
            <MdShoppingCart size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Description;
