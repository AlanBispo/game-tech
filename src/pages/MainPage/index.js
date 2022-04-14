import Navbar from '../../components/Navbar/Navbarhome'

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
          <button type="button" className="btn"> Saiba mais</button>
        </div>
        

        <div className="elipse">
          <div className="text-elipse">
            <h3>
              Cansado de preços abusivos? Confira nossos jogos e
              cupons!
            </h3>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
