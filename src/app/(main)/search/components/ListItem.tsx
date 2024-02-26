import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import Star from "~/lib/icons/star"
import { cn, formatPrice } from "~/lib/utils"

export type TListItem = {
	subtitle: string
	importantProperties: { weight: string }
	rate: number
	price: number
	discount: number
	className: string
}

const ListItem: FC<TListItem> = ({
	discount,
	importantProperties: { weight },
	price,
	rate,
	subtitle,
	className
}) => {
	return (
		<Link
			href={`/product/1`}
			className={cn(
				"persian-number min-h-80 w-full border-secondary-50 px-6 py-8 transition-shadow hover:relative hover:shadow-xl",
				"max-lg:border-t",
				"max-sm:[&:last-child]:border-b",
				"sm:max-lg:[&:nth-child(odd)]:border-l",
				"sm:max-lg:[&:last-child]:border-b",
				"lg:[&:not(:nth-child(4n))]:border-l",
				"flex flex-col items-center",
				className
			)}>
			<Image
				src='/product1.png'
				alt={subtitle}
				width={250}
				height={250}
				sizes='(max-width: 639px) 90vw, (max-width: 1023px) 40vw, 20vw'
				className='max-h-36 w-full object-contain lg:max-h-48'
			/>
			<div className='mt-3 flex items-center self-stretch'>
				<div className='text-xs font-bold text-secondary' dir='ltr'>
					{weight}
				</div>
				<Star className='ms-auto w-3.5 text-[#FDCA14]' />
				<div className='ms-2 text-xs font-bold text-secondary-400'>
					{rate.toLocaleString("fa-ir")}
				</div>
			</div>
			<h3 className='mt-6 text-sm text-secondary'>{subtitle}</h3>
			<div className='mt-6 flex flex-col gap-2 lg:flex-row-reverse lg:items-start lg:justify-between lg:self-stretch'>
				<div className='text-sm font-bold text-primary'>
					{formatPrice(price * (1 - discount / 100))} تومان
				</div>
				<div className='text-xs text-secondary-400 line-through'>
					{formatPrice(price)} تومان
				</div>
			</div>
		</Link>
	)
}

export default ListItem
