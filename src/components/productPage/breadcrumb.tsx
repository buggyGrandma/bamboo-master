import Link from "next/link"
import type { FC } from "react"
import Arrow from "~/lib/icons/arrow"

export const Breadcrumb: FC = () => {
	return (
		<nav className='hidden lg:block' aria-label='breadcrumb'>
			<ol className='font-peyda flex items-center gap-2 text-xs text-secondary-400 [&>li:last-child]:text-secondary'>
				<li>
					<Link href='/'>صفحه اصلی</Link>
				</li>
				<Arrow direction='left' className='h-4 w-4 text-secondary-100' />
				<ThreeDots />
				<Arrow direction='left' className='h-4 w-4 text-secondary-100' />
				<li>
					<Link href='/search'>غذای خشک سگ</Link>
				</li>
				<Arrow direction='left' className='h-4 w-4 text-secondary-100' />
				<li aria-current='page'>
					<span>غذای خشک سگ مینی لایت ویت رویال کنین</span>
				</li>
			</ol>
		</nav>
	)
}

function ThreeDots() {
	return (
		<div className='flex h-6 w-6 items-center justify-center gap-px'>
			<div className='h-1 w-1 rounded-full border border-secondary-400'></div>
			<div className='h-1 w-1 rounded-full border border-secondary-400'></div>
			<div className='h-1 w-1 rounded-full border border-secondary-400'></div>
		</div>
	)
}
