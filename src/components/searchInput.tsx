import type { FC } from "react"
import SearchIcon from "~/lib/icons/search"
import { cn } from "~/lib/utils"

export type SearchInputProps = {
	className?: string
	placeholder?: string
}

export const SearchInput: FC<SearchInputProps> = ({ className, placeholder = "جستجو محصول" }) => {
	return (
		<div className={cn("relative ms-14 h-12 max-w-2xl grow", className)}>
			<input
				type='search'
				name='search'
				id='search'
				placeholder={placeholder}
				className='peer h-full w-full rounded-lg border border-solid border-transparent bg-secondary-50 ps-14 text-sm text-secondary outline-none placeholder:text-secondary-400 focus:border-secondary-50 focus:bg-white'
			/>
			<SearchIcon className='pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-2xl text-secondary peer-placeholder-shown:text-secondary-400' />
		</div>
	)
}
