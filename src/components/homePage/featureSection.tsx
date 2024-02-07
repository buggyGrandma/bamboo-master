import Image from "next/image"
import type { FC } from "react"

export const FeatureSection: FC = () => {
	return (
		<section className='container mt-8 hidden lg:block'>
			<ul className='mx-auto flex flex-wrap items-center justify-center gap-x-16 gap-y-12 rounded-2xl border border-secondary-50 bg-white px-8 py-8'>
				<li className='persian-number flex items-center gap-4'>
					<Image src='/safe-web.svg' alt='safe' width={38} height={28} />
					<div>
						<h3 className='font-medium text-secondary'>100 درصد ایمن</h3>
						<p className='text-sm font-light text-secondary-500'>پرداخت آنلاین و حضوری</p>
					</div>
				</li>
				<li className='persian-number flex items-center gap-4'>
					<Image src='/percent-tag.svg' alt='tag' width={31} height={31} />
					<div>
						<h3 className='font-medium text-secondary'>بهترین قیمت</h3>
						<p className='text-sm font-light text-secondary-500'>تضمین کیفیت</p>
					</div>
				</li>
				<li className='persian-number flex items-center gap-4'>
					<Image src='/rotate-24.svg' alt='24/7' width={40} height={40} />
					<div>
						<h3 className='font-medium text-secondary'>پشتیبانی 24 / 7</h3>
						<p className='text-sm font-light text-secondary-500'>پشتیبانی آنلاین</p>
					</div>
				</li>
				<li className='persian-number flex items-center gap-4'>
					<Image src='/fast-truck.svg' alt='free shipping' width={40} height={40} />
					<div>
						<h3 className='font-medium text-secondary'>ارسال رایگان</h3>
						<p className='text-sm font-light text-secondary-500'>رایگان بالای 200 تومان</p>
					</div>
				</li>
				<li className='persian-number flex items-center gap-4'>
					<Image src='/money-icon.svg' alt='money return' width={30} height={30} />
					<div>
						<h3 className='font-medium text-secondary'>تضمین برگشت پول</h3>
						<p className='text-sm font-light text-secondary-500'>100 درصد برگشت پول</p>
					</div>
				</li>
			</ul>
		</section>
	)
}
