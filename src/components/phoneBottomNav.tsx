"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC } from "react"
import Bag from "~/lib/icons/bag"
import Category from "~/lib/icons/category"
import Home from "~/lib/icons/home"
import Profile from "~/lib/icons/profile"
import Search from "~/lib/icons/search"
import { cn } from "~/lib/utils"

export const PhoneBottomNav: FC = () => {
	const pathanme = usePathname()

	const items = [
		{ href: "/", title: "home", icon: <Home /> },
		{ href: "/search", title: "search", icon: <Search /> },
		{ href: "/menu", title: "menu", icon: <Category /> },
		{ href: "/checkout/cart", title: "cart", icon: <Bag /> },
		{ href: "/profile", title: "profile", icon: <Profile /> }
	]

	return (
		<div className='fixed bottom-0 left-0 grid w-full grid-cols-5 rounded-t-[32px] bg-fa shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] lg:hidden'>
			{items.map((item, i) => (
				<Link
					key={i}
					href={item.href}
					title={item.title}
					className={cn(
						"relative grid place-items-center py-8 text-secondary-400",
						"before:[content=''] before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-10 before:-translate-x-1/2 before:rounded-t-full",
						"after:[content=''] after:absolute after:bottom-0 after:left-1/2 after:h-4 after:w-14 after:-translate-x-1/2 after:rounded-t-full after:opacity-[0.35] after:blur-md",
						"transition-colors before:transition-colors after:transition-colors",
						pathanme === item.href && "text-primary before:bg-primary after:bg-primary"
					)}>
					{item.icon}
				</Link>
			))}
		</div>
	)
}
