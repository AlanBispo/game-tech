import { Link } from "react-router-dom";

import { useCart } from "../CartContext";

import "./styles.css";
import Logo from "../../assets/logo.png";
import { MdShoppingCart } from "react-icons/md";

const Navbarpages = () => {
  const cart = useCart();
  const itemsCount = Object.values(cart.cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>

      <div className="nav-items">
        <Link to="/">
          <span className="nav-item">Inicio</span>
        </Link>
        <Link to="/shop">
          <span className="nav-item">Prudutos</span>
        </Link>
        <Link to="/about">
          <span className="nav-item">Sobre</span>
        </Link>
        <Link to="/cart">
          <span className="nav-item-ico">
            <MdShoppingCart />
            {itemsCount > 0 && <div className="count">{itemsCount}</div>}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbarpages;
