import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Elipse from "../../components/Elipse";

import "./styles.css";

const MainPage = () => {
  return (
    <main className="container">
      <Navbar />
      <section className="info-page">
        <div className="propaganda">
          <h2>
            Não somos uma loja de jogos <br /> Somos a <span>Gamer Tech</span>{" "}
          </h2>
          <h3>
            Para cada estilo gamer que existe, <br /> há um jogo esperando para
            te fazer feliz.
          </h3>
          <Link to="/about">
            <button type="button" className="btn">
              {" "}
              Saiba mais
            </button>
          </Link>
        </div>
        <Elipse />

      </section>
    </main>
  );
};

export default MainPage;
