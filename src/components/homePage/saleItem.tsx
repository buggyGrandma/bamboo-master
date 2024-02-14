import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import { cn, formatPrice } from "~/lib/utils"
interface Props {
	discount: number
	title: string
	expiration: string
	remaining: number
	price: number
}
export const SaleItem = ({ discount, title, expiration, remaining, price }: Props) => {
	return (
		<Link href='/product/1'>
			<div className='persian-number relative rounded-2xl bg-white p-4 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.15)] lg:p-5 xl:p-6 2xl:p-8'>
				<div
					className={cn(
						"absolute left-2 top-2 grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs font-bold text-fa",
						"lg:left-6 lg:top-6 lg:h-12 lg:w-12 lg:rounded-2xl lg:text-lg"
					)}>
					<span className='h-3.5 lg:h-6'>{`${discount}%`}</span>
				</div>
				<Image
					src='/product1.png'
					alt='غذای خشک گربه یوریناری اس او رویال کنین'
					width={224}
					height={224}
					className='mx-auto h-auto w-full object-contain'
				/>
				<h2 className='mt-4 text-xs font-bold text-secondary lg:mt-6 lg:text-center lg:text-lg'>
					{title}
				</h2>
				<div className='mt-2 flex items-center justify-between text-xs text-secondary lg:hidden'>
					<div>تاریخ انقضا:</div>
					<div>{expiration}</div>
				</div>
				<div className='mt-2 flex items-center justify-between gap-4 text-xs text-secondary lg:mt-6 lg:justify-center lg:text-sm'>
					<div>تعداد باقیمانده:</div>
					<div>{remaining}</div>
				</div>
				<div className='mt-3 hidden text-center text-sm font-bold text-secondary line-through lg:block'>
					{formatPrice(price)} تومان
				</div>
				<div className='mt-4 text-center text-lg font-bold text-primary lg:text-2xl lg:font-extrabold'>
					{formatPrice(price * (1 - discount / 100))} تومان
				</div>
			</div>
		</Link>
	)
}
