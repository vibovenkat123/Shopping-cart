/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				RobotoM: ['Roboto Mono', 'sans-serif']
			},
			colors: {
				norddarkest: '#20242b',
				nord0: '#2E3440',
				nord1: '#3B4252',
				nord2: '#434C5E',
				nord3: '#4C566A',
				nord8: '#81A1C1',
				nord6: '#ECEFF4'
			},
			screens: {
				sxl: '1512px',
				thicc: '1835px'
			}
		}
	},
	plugins: []
};
