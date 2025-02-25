/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#FDFDFE',
			black: '#000',
			purple: {
				lighter: '#f7f7fd',
				light: {
					DEFAULT: '#ECEBF6',
					hover: '#E2E1F1',
					active: '#C3C0E2',
				},
				normal: {
					DEFAULT: '#2D2980 ',
					hover: '#352C88',
					active: '#2F277A',
				},
				dark: {
					DEFAULT: '#2F277A',
					hover: '#261F62',
					active: '#1C1749',
				},
				darker: '#161239',
				0: '#0B091D',
				1: '#161239',
				2: '#1C1749',
				3: '#261F62',
			},
			green: {
				lighter: '#f2fdf4',
				light: {
					DEFAULT: '#F2FEF4',
					hover: '#EBFDEF',
					active: '#D5FCDE',
				},
				normal: {
					DEFAULT: '#78F493',
					hover: '#5FE87C',
					active: '#4AD367',
				},
				dark: {
					DEFAULT: '#5AB76E',
					hover: '#489258',
					active: '#366E42',
				},
				darker: '#2A5533',
			},
			blue: {
				lighter: '#f0fcfc',
				light: {
					DEFAULT: '#f1fffe',
					hover: '#ebfffe',
					active: '#d5fffd',
				},
				normal: {
					DEFAULT: '#77fff7',
					hover: '#6be6de',
					active: '#5fccc6',
				},
				dark: {
					DEFAULT: '#59bfb9',
					hover: '#479994',
					active: '#36736f',
				},
				darker: '#2a5956',
			},
			tag: {
				pink: '#FAD9FB',
				orange: '#F5CDB1',
				blue: '#ABF3F3',
			},
		},
		fontFamily: {
			sans: ['Inter Variable', 'sans-serif'],
			serif: ['Nunito Variable', 'serif'],
		},
		fontSize: {
			sm: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.25rem', // 20px
			xl: '1.5rem', // 24px
			'2xl': '2rem', // 32px
			'3xl': '2.5rem', // 40px
			'4xl': '3rem', // 48px
		},
		screens: {
			xs: '375px', // Móviles pequeños
			sm: '480px', // Móviles grandes
			md: '768px', // Tablets
			md2: '900px', // Tablets grandes
			lg: '1024px', // Laptops/Desktops pequeños
			xl: '1280px', // Desktops
			'2xl': '1440px', // Pantallas grandes
		},
		extend: {
			lineHeight: {
				tight: '1.2',
				snug: '1.375',
				normal: '1.5',
				relaxed: '1.625',
			},
			maxWidth: {
				container: '80rem', // 1280px
			},
			animation: {
				'fade-in': 'fadeIn 1s ease-in-out forwards 0.5s',
				'fade-out': 'fadeOut 0.5s ease-in-out',
				'slide-up': 'slideUp 1s ease-out forwards 0.2s',
				'slide-up-lg': 'slideUpDesktop 1s ease-out forwards',
				'slide-down': 'slideDown 1.5s ease-out',
				'slide-left': 'slideLeft 1s ease-in-out forwards 1.25s',
				'slide-right': 'slideRight 1s ease-in-out forwards .5s',
				'bounce-soft': 'bounce 1s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spin-slow': 'spin 3s linear infinite',
				'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				scale: 'scale 0.3s ease-in-out',
				'float-left': 'floatLeft 6s ease-in-out infinite',
				'float-right': 'floatRight 6s ease-in-out infinite',
				shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
				'pulse-large': 'largePulse 7s ease-in-out infinite 5s',
				'fade-in-then-pulse':
					'fadeIn 1s ease-in-out forwards 0.5s, scalePulse 20s ease-in-out infinite 5s, largePulse 20s ease-in-out infinite 5s',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				slideUp: {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideUpMobile: {
					'0%': { transform: 'translateY(50px)' },
					'100%': { transform: 'translateY(0)' },
				},
				slideUpDesktop: {
					'0%': { transform: 'translateY(50px)' },
					'100%': { transform: 'translateY(0px)' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-100px) scale(1.1)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '.5' },
				},
				slideLeft: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideRight: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				scale: {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' },
				},
				shake: {
					'10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
					'20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
					'30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
					'40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
				},
				floatLeft: {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1.05)',
					},
					'50%': {
						transform: 'translate(-10px, 20px) ',
					},
				},
				floatRight: {
					'0%, 100%': {
						transform: 'translate(0, 0)',
					},
					'50%': {
						transform: 'translate(-10px, -20px) scale(1.05)',
					},
				},
		
				scalePulse: {
					'0%': { transform: 'scale(1)' },
					'3%': { transform: 'scale(1.15)' },
					'6%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1)' },
				},
				largePulse: {
					'0%': {
						boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)',
					},
					'6%': {
						boxShadow: '0 0 0 30px rgba(37, 211, 102, 0)',
					},
					'100%': {
						boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
					},
				},
			},
			elevation: {
				1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
				2: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
				3: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
				4: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
				5: '0 20px 40px rgba(0,0,0,0.2)',
			},
			zIndex: {
				header: '100',
				modal: '200',
				tooltip: '300',
			},
			borderRadius: {
				sm: '0.25rem',
				md: '0.5rem',
				lg: '1rem',
			},
			boxShadow: {
				sm: '0 2px 4px rgba(0, 0, 0, 0.05)', // Sutil, para elementos hover
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Cards, elementos elevados
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Modales, elementos destacados
			},
		},
	},
	plugins: [],
};
