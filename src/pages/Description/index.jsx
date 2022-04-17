import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Description/Product";

import { MdKeyboardBackspace } from "react-icons/md";
import ToastAnimated from "../../components/Toast";

import "./styles.css";

const Description = () => {
  return (
    <main className="container">
      <Navbar />
      <ToastAnimated />
      <section className="description">
        <div
          className="arrow-lleft"
          onClick={() => {
            window.history.back();
          }}
        >
          <MdKeyboardBackspace />
        </div>
        < Product />
      </section>
    </main>
  );
};

export default Description;
