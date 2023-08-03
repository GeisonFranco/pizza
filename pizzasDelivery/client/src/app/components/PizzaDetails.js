import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
// components
import SizeSelection from './SizeSelection';
import CrustSelection from './CrustSelection';
import Topping from './Topping';
import styles from './PizzaDetails.module.css'
import { CartContext } from '../context/CartContext';

const PizzaDetails = ({ pizza }) => {
  {/* pizza size state */}
  const [size, setSize] = useState('small');
  const [crust, setCrust] = useState('traditional');
  const [additionalTopping, setAdditionalTopping] = useState([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const { addToCart } = useContext(CartContext)

  //set the price based on the pizza size
  useEffect(() => {
    size === 'small'
    ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2))
    : size === 'medium'
    ? setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2))
    : size === 'large'
    ? setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2))
    : null;
  });
  
  // set aditional topping price
  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);


  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      {/* top */}
      <div className='lg:flex-1 flex justify-center items-center'>
        {/* pizza image */}
        <div className='max-w-[300] lg:max-w-none mt-6 lg:mt-0'>
          <Image width={350} height={350} src={pizza.image} alt=''
          priority={1}
          className='mx-auto relative' />
        </div>
      </div>
      { /* details */}
      <div className='bg-[#000000]  flex flex-col flex-1'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='flex-1 overflow-y-scroll h-[30vh] scrollbar-thin
          scrollbar-thumb-[#e6e6e6] scrollbar-track-[#646363] pr-2'>
            {/* nome */}
            <div className='text-[#dbdada] font-semibold'>
              <h2 className='capitalize text-3xl mb-1'>{pizza.name}</h2>
              {/* size e crust text */}
              <div className='mb-6 text-lg font-medium'>
                <span>
                  {size === 'small' ? '25cm'
                  : size === 'medium' ? '30cm'
                  : size === 'large' ? '35cm'
                  : null}
                </span>
               
              </div>
            </div>
            {/* size selection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            <CrustSelection crust={crust} setCrust={setCrust} />
            <div className='mb-4 text-xl font-semibold'>Escolha o recheio</div>
            <div className='flex flex-1 flex-wrap gap-2 py-1 justify-center
            lg:justify-start'>
              {pizza.toppings?.map((topping, index) => {
                return <Topping 
                topping={topping} 
                additionalTopping={additionalTopping}
                setAdditionalTopping={setAdditionalTopping}
                key={index}
                />;
              })}
            </div>
          </div>
        </div>
        {/* add to cart btn */}
        <div className='h-full flex items-center px-2 lg:items-end'>
          <button onClick={()=> addToCart(
            pizza.id,
            pizza.image,
            pizza.name,
            price,
            additionalTopping,
            size,
            crust
          )} className={styles.btnDetails}>
            <div>Adicionar por</div>
            <div>R$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  )
};

export default PizzaDetails;
