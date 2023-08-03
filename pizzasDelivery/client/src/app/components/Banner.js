'use client'
import Image from 'next/image';

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const Banner = () => {
  return (
    <section className='bg-[#1f1e1e] lg:min-h-[768px] pt-16 lg:pt-16'>
      <div className='mt-5 container mx-auto min-h-[768px] flex items-center
      justify-center'>
        <MouseParallaxContainer
        globalFactorX={0.4}
        globalFactorY={0.3}
        resetOnLeave
        className='w-full flex flex-col lg:flex-row justify-between items-center'
        >
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className='flex flex-col lg:flex-row items-center text-center
            lg:text-left flex-1 px-6'>
              
              <div className='flex-1'>
                <div className='text-[#d3d2d2] font-bangers text-[32px] uppercase tracking-[0.03em]'>
                  Melhor pizza da cidade
                </div>
              <h1 className='text-[#f70f0f] text-6xl lg:text-8xl font-bangers drop-shadow-md'>
                Pizza perfeita <br/> em cada mordida
              </h1>
              </div>
            </div>
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.2} factorY={0.3} className='relative'>
            <div className='flex flex-col lg:flex-row items-center text-center
            lg:text-left flex-1 px-6'>
              <div className='flex-1 flex justify-end max-w-sm lg:max-w-max'>
                <Image
                src={'/pizza-banner.png'}
                width={550}
                height={558}
                alt=''
                priority={1}
                />
              </div>
            </div>

        {/* pimentas */}
         <MouseParallaxChild 
         factorX={0.2} 
         factorY={0.3}
         className='absolute top-6 left-4 hidden xl:flex'
         >
         <Image 
            src={'/chilli-1.png'}
            width={160}
            height={84}
            alt=''
            priority={1}
            />
         </MouseParallaxChild>

         <MouseParallaxChild 
         factorX={0.4} 
         factorY={0.4}
         className='absolute top-6 left-4 hidden xl:flex'
         >
         <Image 
            src={'/chilli-2.png'}
            width={130}
            height={84}
            alt=''
            priority={1}
            />
         </MouseParallaxChild>

         <MouseParallaxChild 
         factorX={0.6} 
         factorY={0.6}
         className='absolute top-80 -left-24 hidden xl:flex'
         >
         <Image 
            src={'/garlic-1.png'}
            width={84}
            height={72}
            alt=''
            priority={1}
            />
         </MouseParallaxChild>

         <MouseParallaxChild 
         factorX={0.3} 
         factorY={0.6}
         className='absolute top-[22rem] -left-8 hidden xl:flex'
         >
         <Image 
            src={'/garlic-2.png'}
            width={100}
            height={72}
            alt=''
            priority={1}
            />
         </MouseParallaxChild>

         <MouseParallaxChild 
         factorX={0.4} 
         factorY={1}
         className='absolute top-96 -left-20 hidden xl:flex'
         >
         <Image 
            src={'/garlic-3.png'}
            width={100}
            height={72}
            alt=''
            priority={1}
            />
         </MouseParallaxChild>

         <MouseParallaxChild 
         factorX={0.2} 
         factorY={0.2}
         className='absolute top-96 -left-12 hidden xl:flex'
         >
         <Image 
            src={'/leaves.png'}
            width={180}
            height={72}
            alt=''
            priority={1}
            />
         </MouseParallaxChild>

          </MouseParallaxChild>
        </MouseParallaxContainer>

      </div>
    </section>
  )
};

export default Banner;
