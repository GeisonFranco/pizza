import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoCloseOutline } from 'react-icons/io5';

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext)
  return (
    <div className='w-full h-20 flex items-center justify-between px-10'>
      <div className='font-semibold'>Sacola de compra(3)</div>
      <div onClick={() => setIsOpen(false)} className='cursor-pointer group'>
        <IoCloseOutline className='text-3xl group-hover:scale-110 duration-300 transition-all' />
      </div>
    </div>
  );
};

export default CartTop;
