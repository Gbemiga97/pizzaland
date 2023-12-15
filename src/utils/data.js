import { images } from '.'

// pizza data
const pizzas = [
  {
    id: 1,
    name: 'capricciosa',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Capricciosa,
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'cheesy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Chessy,
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'hawaii',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Hawaii,
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'italian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Italian,
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'margherita',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Margherita,
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'pepperoni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Pepperoni,
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'quattro formaggi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.QuattroFormaggi,
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'quattro stagioni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.QuattroStagioni,
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'tonno',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Tonno,
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'vegetarian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: images.Vegetarian,
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: images.Cherry,
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: images.Corn,
        name: 'corn',
        price: 2,
      },
      {
        image: images.FreshTomatoes,
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: images.Jalapeno,
        name: 'jalapeno',
        price: 2,
      },
      {
        image: images.Parmesan,
        name: 'parmesan',
        price: 2,
      },
    ],
  },
];


const data = {
    pizzas
}

export default data