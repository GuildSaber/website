/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: "#048FFF",
				secondary: "#88F7F0",
				tertiary: "#A8A8AB",
				primarybg: "#26272F",
				secondarybg: "#2A2B35",
				tertiarybg: "#251F26"
			}
		}
	},
	plugins: [],
};
