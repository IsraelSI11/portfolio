/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
                'border': 'border 4s linear infinite',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                }
            } ,
			colors: {
				'orange-highlight': '#FFC300',
				'background-color': '#000814',
				'gray-desc': '#D9D9D9',
				'background-blue': '#001D3D',
			}
		},
	},
	plugins: [],
}
