import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className=' absolute w-full py-2 '>
      <div
      className='container mx-auto flex lg:flex-row gap-y-3
      justify-between items-center'
      >
        <Link href='#' className='max-w-[160px] lg:max-w-max'>
          <Image
          src={'/pizzalogo1.png'}
          width={100}
          height={100}
          alt=''
          />
        </Link>

        <div className='flex gap-x-8 items-center'>
          <div className='flex gap-x-3 items-center'>
            <Image
            src={'/wahtsicon.png'}
            width={42}
            height={42}
            alt=''
            />
          </div>

          <div className='relative cursor-pointer lg:flex flex '>
            <Image
            src={'/bagiconred.png'}
            width={42}
            height={42}
            alt=''
            />
            <div className='bg-[#f00b0b] w-6 h-6 rounded-full flex
            justify-center text-[14px] font-robotoCondensed absolute
            -bottom-2 -right-1'>3</div>
          </div>


        </div>

      </div>
    </nav>
  )
};

export default Nav;
