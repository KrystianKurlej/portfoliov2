/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				displayLarge: "2.375rem",
				displayMedium: "2rem",
				displaySmall: "1.625rem",
				headlineLarge: "2rem",
				headlineMedium: "1.5rem",
				headlineSmall: "1.25rem",
				baseLarge: "1.125rem",
				baseMedium: "0.875rem",
				baseSmall: "0.75rem",
			},
		},
	},
	plugins: [],
};
