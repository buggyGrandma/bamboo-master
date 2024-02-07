import type {
	CVA,
	CX,
	CXOptions,
	CXReturn,
	Compose,
	DefineConfig,
	DefineConfigOptions,
	VariantProps
} from "cva"
import { defineConfig } from "cva"
import { twMerge } from "tailwind-merge"

export { CVA, CX, CXOptions, CXReturn, Compose, DefineConfig, DefineConfigOptions, VariantProps }

export const { cva, cx, compose } = defineConfig({
	hooks: {
		onComplete: (className) => twMerge(className)
	}
})
