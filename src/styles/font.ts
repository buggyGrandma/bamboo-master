import localFont from "next/font/local"

export const IRANYekanXVF = localFont({
	src: "./fonts/IRANYekanXVF.woff2",
	fallback: ["system-ui"],
	variable: "--font-iranyekan",
	declarations: [{ prop: "font-variation-settings", value: '"dots" 3' }]
})
