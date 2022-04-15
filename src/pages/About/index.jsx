import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
    return (
        <main className="container-about">
            <Navbar />
            <section className="description-about">
                <h2>O que é a <span>GameTech?</span></h2>
                <p>Somos uma empresa moderna de vendas de jogos com o intuito 
                de levar as melhores ofertas para os gamers brasileiros.</p>
                <p>A empresa foi fundada em 2022, o primeiro de muitos anos, com o objetivo de revolucionar o mercado gamer e espantar os preços abusivos.</p>
                <h4>Junte-se a nós para a revolução gamer!</h4>
            </section>
        </main>
    )
}

export default About;