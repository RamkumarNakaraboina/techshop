// src/context/ProductsContext.jsx
import { createContext, useContext } from "react";
import productsData from "../data/productsData";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ products: productsData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
