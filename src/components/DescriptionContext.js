import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const DescriptionContext = createContext();

export const DescriptionProvider = ({ children }) => {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    const cartLocal = window.localStorage.getItem("produto");
    if (cartLocal) {
      setProduto(JSON.parse(cartLocal));
    }
  }, []);

  const addToDescription = (product) => {
    setProduto(product);
    window.localStorage.setItem("produto", JSON.stringify(produto));
  };
  return (
    <DescriptionContext.Provider value={{ produto, addToDescription }}>
      {children}
    </DescriptionContext.Provider>
  );
};

export const useProduto = () => {
  const produto = useContext(DescriptionContext);
  return produto;
};
