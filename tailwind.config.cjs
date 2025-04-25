/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography')
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': {
					light: '#fff9ee',
					dark: '#15130b'
				},
				'onPrimaryBackground': {
					light: '#f4eddf',
					dark: '#222017'
				}
			}
		}
	}
}
