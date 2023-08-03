import react, { useState, useEffect } from 'react';
import Image from 'next/image';
//icons
import { IoMdCheckmark } from 'react-icons/io';


const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {

  const [isChecked, setIsChecked] = useState(false);

  {/* handle sheckbox */}
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  {/* handle toppings */}
  const handleTopping = () => {
    if (isChecked) {
    // use set to ensure unique value 
    const newToppings = new Set([...additionalTopping, {...topping}]);
    setAdditionalTopping(Array.from(newToppings));
    } else {
      //remove the topping with the matching name
      const newToppings = additionalTopping.filter((toppingOb) => {
        return toppingOb.name !== topping.name;
      });
      setAdditionalTopping(newToppings);
    }
  
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);

  return (
    <div
    className={`${isChecked && 'border-[#f53232]'}
     w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center
     justify-center border border-[#323232] rounded-md bg-[#323232] relative`}
    >
      <Image 
      src={topping.image}
      width={70}
      height={70}
      alt=''
      className='mb-2'
      />
      <div className='text-sm capitalize text-center font-medium'>
        {topping.name}
      </div>

      <input 
      className='absolute w-full h-full opacity-0 cursor-pointer'
      type='checkbox'
      checked={isChecked}
      onChange={handleCheckBox}
      />
      {/* checkbox icon */}
      <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute
      top-1 right-1`}>
        <IoMdCheckmark className='text-xl text-[#f94808]'/>
      </div>
    </div>
  )

};

export default Topping;
