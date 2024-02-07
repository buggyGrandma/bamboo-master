/** @type {import("prettier").Config} */
const config = {
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	jsxSingleQuote: true,
	printWidth: 100,
	semi: false,
	quoteProps: "as-needed",
	singleQuote: false,
	tabWidth: 3,
	trailingComma: "none",
	useTabs: true
}

module.exports = config
