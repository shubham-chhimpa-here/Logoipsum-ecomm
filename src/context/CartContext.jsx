import { createContext, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

export const CartContext = createContext(null);


export function CartContextProvider({ children }) {
const [cart, setCart] = useState([])
    return <>
        <CartContext.Provider value= {{cart, setCart}}>
            {children}
        </CartContext.Provider>
    </>
}