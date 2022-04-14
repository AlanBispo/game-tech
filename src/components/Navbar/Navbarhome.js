import { Link } from "react-router-dom";

import "./styles.css"
import Logo from "../../assets/logo.png";

const Navbarhome = () => {
  return(
    <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>

        <div className="nav-items">
        <Link to="/"><span className="nav-item">Inicio</span></Link>
        <Link to="/shop"><span className="nav-item">Prudutos</span></Link>
        <Link to="about"><span className="nav-item">Sobre</span></Link>
        </div>
      </header>
  );
}

export default Navbarhome;