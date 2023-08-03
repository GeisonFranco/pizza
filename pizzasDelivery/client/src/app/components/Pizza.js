'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
//components
import PizzaDetails from './PizzaDetails';
//icons
import {IoCloseOutline} from 'react-icons/io5';

import styles from './Pizza.module.css'

// btn modal to body
Modal.setAppElement('body')

//modal styles
const modalStyles = {
  overlay: {
    backgroundColor: '#323232',
  }
}

const Pizza = ({ pizza }) => {
  // modal state
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }


  
  return (
    <div className='group py-2 bg-[#1f1e1e] px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image
      onClick={openModal}
      className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8
      cursor-pointer'
       width={270} 
       height={270}
        src={pizza.image}
         alt='' priority={1} />
      {/* title */}
      <div>
        <div className='text-[#efefef] text-xl font-bold mb-3 capitalize cursor-pointer'>
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className='text-[#a8a4a4] text-sm font-medium min-h-[60px] mb-6'>
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className='mb-6 flex items-center justify-between'>
        <div className='text-[#e6e5e5] hidden lg:flex text-sm font-semibold'>
          {/* price -> hidden (sm) - visible (lg) */}
          a partir de {pizza.priceSm}
        </div>
        {/* btn -> hidden (sm) - visible (lg) */}
        <button 
        onClick={openModal}
        className={styles.btn}
        >
          Escolher
          </button>
          {/* btn -> visible (sm) - hidden (lg) */}
          <button 
          onClick={openModal}
          className={styles.btnSmall}>
            a partir de {pizza.priceSm}
          </button>
      </div>

      {/* modal */}
      {modal && 
      <Modal 
      isOpen={modal} 
      style={modalStyles} 
      onRequestClose={closeModal}
      contentLabel='Pizza Modal'
      className='bg-[#000000] w-full h-full lg:max-w-[900px] lg:max-h-[600px]
      lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%]
      lg:translate-y-[-50%] outline-none'>
      
      {/* close modal icon */}
      <div
      onClick={closeModal}
      className='absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer'
      >
        <IoCloseOutline className='text-4xl text-[#ffffff]'/>
      </div>
      {/* pizza details */}
      <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />

      </Modal>}
    </div>
  )
};

export default Pizza;
