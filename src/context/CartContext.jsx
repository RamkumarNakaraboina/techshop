import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "./CartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", payload: id });

  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", payload: id });

  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CCartContext);
