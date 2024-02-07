import Link from "next/link"
import { type FC } from "react"
import { cn } from "~/lib/utils"

export type InfoSectionTabLinkProps = {
	text: string
	href: string
	active?: boolean
}

export const InfoSectionTabLink: FC<InfoSectionTabLinkProps> = ({ text, href, active }) => {
	return (
		<Link
			href={href}
			className={cn(
				"relative inline-block px-4 py-3 text-xs font-bold text-secondary outline-none transition-all lg:text-sm lg:font-normal",
				"before:absolute before:bottom-0 before:left-1/2 before:h-0 before:w-11/12 before:-translate-x-1/2 before:bg-primary before:transition-all",
				active && "text-primary before:h-0.5"
			)}>
			{text}
		</Link>
	)
}
