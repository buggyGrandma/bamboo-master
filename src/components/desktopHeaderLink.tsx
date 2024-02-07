"use server"
import Link, { type LinkProps } from "next/link"
import { cn } from "~/lib/utils"

export const DesktopHeaderLink: React.FC<{
	href: LinkProps["href"]
	text: string
	active?: boolean
}> = ({ href, text, active }) => (
	<li className='relative ms-7 pb-5'>
		<Link
			href={href}
			className={cn(
				"flex h-full items-center rounded-lg border-none bg-transparent px-4 py-2 text-sm font-bold text-secondary outline-none before:pointer-events-none before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-primary before:transition-all hover:text-primary hover:before:w-[calc(100%_-_2rem)]",
				active && "text-primary before:w-[calc(100%_-_2rem)]"
			)}>
			{text}
		</Link>
	</li>
)
