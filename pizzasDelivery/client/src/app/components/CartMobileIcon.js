'use client';
import { useContext} from 'react';
import { BsHandbagFill } from 'react-icons/bs'; 
import { CartContext } from '../context/CartContext';

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div 
    onClick={() => setIsOpen(!isOpen)}
    className='bg-[#030202] w-[72px] h-[72px] rounded-full flex
     justify-center items-center cursor-pointer fixed right-[10%] bottom-[5%] z-20'>
      <BsHandbagFill className='text-4xl'/>
      <span className='absolute bottom-3 right-4 bg-[#ff0e0e] w-5 h-5
      flex justify-center items-center rounded-full font-robotoCondensed
      text-[13px]'>3</span>
    </div>
  )
};

export default CartMobileIcon;
