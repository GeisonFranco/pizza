// import components
import Pizza from './components/Pizza';
import Banner from './components/Banner';

// pizza data
const pizzas = [
  {
    id: 1,
    name: 'Caprichada',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Queijo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Lombo canadense',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/hawaii.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Italiana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/italian.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'margherita',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/margherita.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'pepperoni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/pepperoni.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'Quatro queijos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/quattro-formaggi.webp',
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'Quatro estações',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/quattro-stagioni.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'Tonho',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/tonno.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'Vegetariana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/vegetarian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'tomate cereja',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'milho',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'tomates',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'pepinos',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesão',
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section className='bg-[#1f1e1e]'>
      <Banner />
      <div className='bg-[#1f1e1e] container mx-auto'>
        {/* pizza grid */}
        <div className='grid grid-cols- gap-[15px] md:grid-cols-3 xl:grid-cols-4
        xl:gap-[30px] py-12'>
          {pizzas.map((pizza) => {
            return <Pizza pizza={pizza} />
          })}
        </div>
      </div>
    </section>
  )
}
