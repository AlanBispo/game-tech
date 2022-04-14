import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Shop from "./pages/Shop";
import Description from "./pages/Description";
import Cart from "./pages/Cart";

import { CartProvider } from './components/CartContext'
import { DescriptionProvider } from './components/DescriptionContext'

import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <DescriptionProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/description" element={<Description />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </DescriptionProvider>
    </CartProvider>
  );
};

export default App;
