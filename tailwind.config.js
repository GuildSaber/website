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
				tertiarybg: "#251F26",
				easy: "#3CB371",
				normal: "#59B0F4",
				hard: "#FF6347",
				expert: "#BF2A42",
				expertplus: "#8F48DB"
			}
		}
	},
	plugins: [],
};
