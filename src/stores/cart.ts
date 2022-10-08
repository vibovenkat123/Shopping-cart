import { writable, type Writable } from 'svelte/store';
import rocketImg from '../images/rocket-fuel.jpeg'
import bananaImg from '../images/banana.jpeg'
import planeImg from '../images/plane.jpeg'
import earthImg from '../images/earth.jpeg'
import crayonImg from '../images/crayons.jpeg'
import frogImg from '../images/frog.jpeg'

type productsArray = { name: string; price: string; id: number; description?: string, src:string}[];
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
export const cart:Writable<number[]> = writable([]);
let id = 0;
export const products: productsArray = [
	{
		name: 'Rocket Fuel',
		price: formatter.format(10_000),
		id: id++,
    description:'Don\'t put fire on this.',
    src:rocketImg
	},
  {
		name: '[LT] PLANES!!',
		price: formatter.format(89_000_100),
		id: id++,
    description:'Just a few million dollars :).',
    src:planeImg
	},
  {
		name: 'Banana',
		price: formatter.format(9),
		id: id++,
		description: `One of the most sane items to buy.`,
    src:bananaImg
	},
  {
		name: 'Earth',
		price: 'Andromeda Galaxy',
		id: id++,
		description: `Why on Earth would you want this.`,
    src:earthImg
	},
  {
		name: 'Crayons',
		price: formatter.format(20),  
		id: id++,
		description: `The only artistic tool here.`,
    src:crayonImg,
	},
  {
		name: 'Frog',
		price: 'Your life',  
		id: id++,
		description: `I swear if you buy the only thing I want here.`,
    src:frogImg,
	},
];
