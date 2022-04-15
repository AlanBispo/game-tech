import { useProduto } from "../../components/DescriptionContext";
import { useCart } from "../../components/CartContext";

import Navbarpages from "../../components/Navbar/Navbar";
import { MdShoppingCart, MdKeyboardBackspace } from "react-icons/md";
import ToastAnimated, { showToast } from "../../components/Toast";

import "./styles.css";

const Description = () => {
  const cart = useCart();
  const produto = useProduto();
  const add = (comic) => () => {
    cart.addToCart(comic);
  };
  const games = produto.produto;

  const handleClick = () =>
    showToast({ type: "success", message: "Adicionado com sucesso" });

  return (
    <main className="container">
      <Navbarpages />
      <ToastAnimated />
      <section className="description">
        <div className="description-item">
          <h1 className="title">{games.name}</h1>
          <img className="img" src={games.image} alt={games.name} />
          <span className="price">Preço: R$ {games.price}</span>
          <div onClick={handleClick}> 
             <button className="btn-dscpt" onClick={add(produto.produto)}>
            Adicionar ao Carrinho
            <MdShoppingCart size={18} />
          </button>
          </div>
         
        </div>
      </section>
    </main>
  );
};

export default Description;
