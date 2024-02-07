import { cva, type VariantProps } from "~/lib/cva"

const tag = cva({
	base: "px-2 py-1 rounded text-sm",
	variants: {
		selected: {
			true: "bg-primary text-white",
			false: "border border-secondary-50 text-secondary"
		}
	},
	defaultVariants: {
		selected: false
	}
})

export interface SearchTagProps
	extends React.ButtonHTMLAttributes<HTMLLIElement>,
		VariantProps<typeof tag> {
	text: string
}

export const SearchTag: React.FC<SearchTagProps> = ({ text, className, selected, ...props }) => (
	<li className={tag({ selected, className })} {...props}>
		{text}
	</li>
)
