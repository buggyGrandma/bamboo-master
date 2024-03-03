import Link from "next/link"
import type { FC } from "react"
import Star from "~/lib/icons/star"
import TickSquare from "~/lib/icons/tickSquare"
import { formatPrice } from "~/lib/utils"
import { AddToCartButton } from "./addToCartButton"
import { ISalesItem } from "../homePage/saleSection"

export const HeadingInfo: FC<ISalesItem> = ({
	title,
	subtitle,
	price,
	discount,
	description,
	importantProperties: { expiration, weight },
	normalProperties: { country, brand }
}: ISalesItem) => {
	return (
		<div className='border-b border-secondary-50 py-8 lg:p-8 lg:pt-20'>
			<Link href='search' className='text-sm font-bold text-primary'>
				{title}{" "}
			</Link>
			<h1 className='mt-2 text-lg font-bold text-secondary'>{subtitle} </h1>
			<div className='mt-2 flex items-center gap-4'>
				<Star className='text-[#ffc700]' />
				<p className='persian-number text-xs text-secondary-400'>امتیازدهی 4.5 از 5</p>
			</div>
			<div className='persian-number mt-8 flex items-center gap-4'>
				<div className='text-2xl font-extrabold text-primary'>
					{formatPrice(price * (1 - discount / 100))} تومان
				</div>
				<div className='text-sm text-secondary-600 line-through'>
					{formatPrice(price)} تومان
				</div>
			</div>
			<p className='mt-8 hidden text-sm text-secondary lg:block'>{description} </p>
			<ul className='mt-8'>
				<p className='mb-2 hidden text-sm text-secondary lg:block'>ویژگی های محصول:</p>
				<div className='grid grid-cols-1 gap-y-2 lg:mt-6 lg:grid-cols-2 lg:gap-4'>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>تاریخ انقضاء:</div>
						<div className='font-bold lg:font-normal'>{expiration}</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>وزن محصول:</div>
						<div className='font-bold lg:font-normal'>{weight}</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>محصول کشور:</div>
						<div className='font-bold lg:font-normal'>{country}</div>
					</li>
					{/* <li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>تاریخ انقضاء:</div>
						<div className='font-bold lg:font-normal'>2023/07</div>
					</li> */}
					{/* <li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>محصول کشور:</div>
						<div className='font-bold lg:font-normal'>آلمان</div>
					</li> */}
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>مدل:</div>
						<div className='font-bold lg:font-normal'>{brand}</div>
					</li>
				</div>
			</ul>
			<AddToCartButton className='mt-8' />
		</div>
	)
}
