/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				RobotoM: ['Roboto Mono', 'sans-serif']
			},
			screens: {
				'sxl':'1512px',
				'thicc': '1835px'
			}
		}
	},
	plugins: []
};
