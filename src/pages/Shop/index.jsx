/* Esta página foi feita usando a técnica Mobile first, para demonstrar conhecimento sobre. */
import Products from "../../components/Shop/Products"
import Navbar from "../../components/Navbar/Navbar";

import "./styles.css";

const Shop = () => {
  return (
    <main className="container-shop">
      <Navbar />
      <h1>Todos os jogos</h1>
      <Products />
    </main>
  );
};

export default Shop;
