module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-olive': '#606C38',
				kombu: '#283618',
				cornsilk: '#FEFAE0',
				'earth-yellow': '#DDA15E',
				'liver-dogs': '#BC6C25',
				'eerie-black': '#131313',
				'black-lighter': '#1D1D1D',
				'theme-primary': '#60a5fa', 
			},
			fontFamily: {
				body: ['Poppins'],
				content: ['Poppins']
			},
			height: {
				header: '6rem'
			},
			dropShadow: {
				'blue-shadow': '0 35px 35px #60a5fa'
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0%'
					},
					'100%': {
						opacity: '100%'
					}
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' }
				},
				messageBounce: {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			},
			animation: {
				'message-bounce': 'messageBounce 3s ease-in-out infinite',
				wiggle: 'wiggle 0.2s ease-in-out 2',
				'fade-in': 'fade-in 1s ease-in-out 1'
			}
		}
	},
	daisyui: {
		themes: ["dark"],
	},
	plugins: [require('daisyui')]
};
