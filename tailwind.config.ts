
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'royal-blue': 'hsl(var(--royal-blue))',
				'royal-blue-light': 'hsl(var(--royal-blue-light))',
				'royal-blue-dark': 'hsl(var(--royal-blue-dark))',
				'tiffany-blue': 'hsl(var(--tiffany-blue))',
				'tiffany-blue-light': 'hsl(var(--tiffany-blue-light))',
				'tiffany-blue-dark': 'hsl(var(--tiffany-blue-dark))',
				// Microsoft colors
				'ms-blue': '#0078d4',
				'ms-blue-light': '#106ebe',
				'ms-blue-dark': '#005a9e',
				'ms-green': '#107c10',
				'ms-green-light': '#14a114',
				'ms-green-dark': '#0b5c0b',
				'ms-red': '#d83b01',
				'ms-red-light': '#f4433a',
				'ms-red-dark': '#a12b23',
				'ms-yellow': '#ffb900',
				'ms-yellow-light': '#ffc83d',
				'ms-yellow-dark': '#d39300',
				'ms-purple': '#5c2d91',
				'ms-purple-light': '#7c43bd',
				'ms-purple-dark': '#4a2376',
				'ms-gray': '#505050',
				'ms-gray-light': '#d2d0ce',
				'ms-gray-dark': '#252423',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'royal-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 120, 212, 0.7), 0 0 10px rgba(0, 120, 212, 0.5)', 
						borderColor: 'rgba(0, 120, 212, 0.8)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(0, 120, 212, 0.9), 0 0 20px rgba(0, 120, 212, 0.7)', 
						borderColor: 'rgba(0, 120, 212, 1)'
					}
				},
				'ms-pulse': {
					'0%, 100%': { 
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'royal-glow': 'royal-glow 2s infinite ease-in-out',
				'ms-pulse': 'ms-pulse 3s infinite ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
