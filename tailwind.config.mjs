/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
                'border': 'border 4s linear infinite',
				'fade-in': 'fadeIn 0.3s ease-in-out',
				'fade-out': 'fadeOut 0.3s ease-in-out',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                },
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fadeOut': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
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
