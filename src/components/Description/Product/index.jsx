import { useProduto } from "../../DescriptionContext";
import { useCart } from "../../CartContext";

import { MdShoppingCart } from "react-icons/md";
import  { showToast } from "../../Toast";
import "./styles.css";

const Product = () => {
  const cart = useCart();
  const produto = useProduto();
  const add = (comic) => () => {
    cart.addToCart(comic);
  };
  const games = produto.produto;

  const handleClick = () =>
    showToast({ type: "success", message: "Produto adicionado ao carrinho" });
  return (
    <section className="description-item">
      <h1 className="title">{games.name}</h1>
      <img className="img-game" src={games.image} alt={games.name} />
      <span className="price">Valor: R$ {games.price}</span>
      <span className="price">Pontuação: {games.score}</span>
      <span className="descricao">{games.description}</span>
      <div onClick={handleClick}>
        <button className="btn-dscpt" onClick={add(produto.produto)}>
          Adicionar ao Carrinho
          <MdShoppingCart size={18} />
        </button>
      </div>
    </section>
  );
};

export default Product;
