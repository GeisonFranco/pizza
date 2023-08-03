'use client'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartTop from "./CartTop";
import CartBottom from "./CartBottom";

const CartMobile = () => {
  const { isOpen } = useContext(CartContext);
  return (
    <div
    className={`${
      isOpen ? 'bottom-0' : '-bottom-full'
    } bg-[#323232] fixed w-full h-full left-0 z-20 transition-all
    duration-300 lg:hidden flex flex-col `}
    >
      <CartTop />

      <div>cart items</div>

      <CartBottom />
    </div>
  )
};

export default CartMobile;
