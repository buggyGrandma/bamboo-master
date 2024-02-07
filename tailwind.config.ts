import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
				lg: "3.5rem",
				"2xl": "0px"
			}
		},
		extend: {
			colors: {
				white: "#ffffff",
				fa: "#fafafa",
				primary: "#ff5722",
				secondary: {
					DEFAULT: "#455a64",
					50: "#eceff1",
					100: "#cfd8dc",
					400: "#78909c",
					500: "#607d8b",
					600: "#546e7a"
				},
				green: "#10ba83"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			fontFamily: {
				iranyekan: ["var(--font-iranyekan)"]
			}
		}
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-animate"),
		require("@headlessui/tailwindcss")
	]
}
export default config
