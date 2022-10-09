import { writable, type Writable } from 'svelte/store';
import rocketImg from '../images/rocket-fuel.jpeg';
import bananaImg from '../images/banana.jpeg';
import planeImg from '../images/plane.jpeg';
import earthImg from '../images/earth.jpeg';
import crayonImg from '../images/crayons.jpeg';
import frogImg from '../images/frog.jpeg';

type productsArray = {
	name: string;
	price: string;
	id: number;
	description?: string;
	src: string;
	rawPrice: number;
}[];
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});
export const cart: Writable<{ id: number; quantity: number }[]> = writable([]);
export const total: Writable<number> = writable(0);
let id = 0;
export const products: productsArray = [
	{
		name: 'Rocket Fuel',
		price: formatter.format(10_000),
		id: id++,
		description: "Don't put fire on this.",
		src: rocketImg,
		rawPrice: 10_000
	},
	{
		name: '[LT] PLANES!!',
		price: formatter.format(89_000_100),
		id: id++,
		description: 'Just a few million dollars.',
		src: planeImg,
		rawPrice: 89_000_100
	},
	{
		name: 'Banana',
		price: formatter.format(9),
		id: id++,
		description: `One of the most sane items to buy.`,
		src: bananaImg,
		rawPrice: 9
	},
	{
		name: 'Earth',
		price: 'Andromeda Galaxy',
		id: id++,
		description: `Why on Earth would you want this.`,
		src: earthImg,
		rawPrice: Infinity
	},
	{
		name: 'Crayons',
		price: formatter.format(20),
		id: id++,
		description: `The only artistic tool here.`,
		src: crayonImg,
		rawPrice: 20
	},
	{
		name: 'Frog',
		price: 'Your life',
		id: id++,
		description: `I swear if you buy the only thing I want here.`,
		src: frogImg,
		rawPrice: 1_000_000_000_000_000
	}
];
