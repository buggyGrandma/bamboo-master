import Link from "next/link"
import type { FC } from "react"
import Star from "~/lib/icons/star"
import TickSquare from "~/lib/icons/tickSquare"
import { formatPrice } from "~/lib/utils"
import { AddToCartButton } from "./addToCartButton"

export const HeadingInfo: FC = () => {
	return (
		<div className='border-b border-secondary-50 py-8 lg:p-8 lg:pt-20'>
			<Link href='search' className='text-sm font-bold text-primary'>
				غذای گربه بالغ
			</Link>
			<h1 className='mt-2 text-lg font-bold text-secondary'>
				غذای خشک گربه بالغ سانابل مناسب گربه های دارای آلرژی
			</h1>
			<div className='mt-2 flex items-center gap-4'>
				<Star className='text-[#ffc700]' />
				<p className='persian-number text-xs text-secondary-400'>امتیازدهی 4.5 از 5</p>
			</div>
			<div className='persian-number mt-8 flex items-center gap-4'>
				<div className='text-2xl font-extrabold text-primary'>{formatPrice(890000)} تومان</div>
				<div className='text-sm text-secondary-600 line-through'>
					{formatPrice(950000)} تومان
				</div>
			</div>
			<p className='mt-8 hidden text-sm text-secondary lg:block'>
				غذای خشک گربه اوتدور سانابل سرشار از انواع پروتئین های حیوانی بوده و فرمولاسیون ویژه آن
				در حفظ سلامت و تقویت قلب و بینایی حیوان موثر است.گربه های خیابانی به دلیل میزان فعالیت
				بالایی که دارند به غذاهای پر کالری تر نیازمندند.
			</p>
			<ul className='mt-8'>
				<p className='mb-2 hidden text-sm text-secondary lg:block'>ویژگی های محصول:</p>
				<div className='grid grid-cols-1 gap-y-2 lg:mt-6 lg:grid-cols-2 lg:gap-4'>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>تاریخ انقضاء:</div>
						<div className='font-bold lg:font-normal'>2023/07</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>وزن محصول:</div>
						<div className='font-bold lg:font-normal'>24 کیلو گرم</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>محصول کشور:</div>
						<div className='font-bold lg:font-normal'>آلمان</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>تاریخ انقضاء:</div>
						<div className='font-bold lg:font-normal'>2023/07</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>محصول کشور:</div>
						<div className='font-bold lg:font-normal'>آلمان</div>
					</li>
					<li className='flex items-center justify-between gap-2 text-sm text-secondary lg:justify-start'>
						<TickSquare className='me-2 hidden lg:block' />
						<div className=''>مدل:</div>
						<div className='font-bold lg:font-normal'>Sanabelle Outdoor</div>
					</li>
				</div>
			</ul>
			<AddToCartButton className='mt-8' />
		</div>
	)
}
