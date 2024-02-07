import Image from "next/image"
import Link from "next/link"
import { PhoneHeader } from "~/components/phoneHeader"
import { AddToCartButton } from "~/components/productPage/addToCartButton"
import Arrow from "~/lib/icons/arrow"
import CloseSquare from "~/lib/icons/closeSquare"
import TickSquare from "~/lib/icons/tickSquare"
import { cn } from "~/lib/utils"

type CartPageProps = {
	searchParams: {
		query?: string
		category?: string
		page?: string
	}
}

export const metadata = {
	title: "سبد خرید"
}

export default function CartPage(props: CartPageProps) {
	return (
		<div className='bg-white pb-28 lg:bg-fa'>
			<PhoneHeader titleNormal='سبد' titleColored='خرید' />
			<div className='container mt-8 lg:mt-10'>
				<h2 className='ms-3 hidden text-sm text-secondary lg:block'>
					<span>سبد</span> <span className='text-primary'>خرید</span>
				</h2>
				<div className='mt-2 hidden rounded-2xl border border-secondary-50 bg-white px-14 py-10 lg:block xl:px-16 2xl:px-20'>
					<div className='mx-auto flex max-w-6xl items-center gap-6'>
						<div className='shrink-0 text-2xl font-extrabold text-primary'>سبد خرید</div>
						<div className='h-px grow bg-secondary-400' />
						<div className='flex shrink-0 flex-col items-center gap-2 text-sm font-medium text-secondary-400 '>
							<TickSquare width={32} height={32} />
							ورود به حساب
						</div>
						<div className='h-px grow bg-secondary-400' />
						<div className='flex shrink-0 flex-col items-center gap-2 text-sm font-medium text-secondary-400 '>
							<TickSquare width={32} height={32} />
							انتخاب ادرس
						</div>
						<div className='h-px grow bg-secondary-400' />
						<div className='flex shrink-0 flex-col items-center gap-2 text-sm font-medium text-secondary-400 '>
							<TickSquare width={32} height={32} />
							نحوه پرداخت
						</div>
						<div className='h-px grow bg-secondary-400' />
						<div className='flex shrink-0 flex-col items-center gap-2 text-sm font-medium text-secondary-400 '>
							<TickSquare width={32} height={32} />
							پایان
						</div>
					</div>
				</div>
				<div className='border-secondary-50 bg-white lg:mt-4 lg:rounded-2xl lg:border lg:px-6 lg:py-8'>
					<div className='flex flex-col lg:flex-row'>
						<section className='grow'>
							<div className='hidden border-b border-secondary-50 pb-4 text-center text-lg font-semibold text-secondary-400 md:block lg:hidden xl:block'>
								<div className='flex items-center gap-2 px-4'>
									<div className='ms-6'>محصولات</div>
									<div className='ms-auto w-24'>قیمت</div>
									<div className='w-40'>تعداد</div>
									<div className='w-32'>مجموع</div>
								</div>
							</div>
							<ul>
								<li
									className={cn(
										"rounded-lg border border-secondary-50 p-2.5 [&:not(:first-of-type)]:mt-8",
										"md:rounded-none md:border-0 md:px-0 md:py-8 md:[&:not(:first-of-type)]:mt-0 md:[&:not(:first-of-type)]:border-t",
										"lg:rounded-lg lg:border lg:p-2.5 lg:[&:not(:first-of-type)]:mt-8",
										"xl:rounded-none xl:border-0 xl:px-0 xl:py-8 xl:[&:not(:first-of-type)]:mt-0 xl:[&:not(:first-of-type)]:border-t"
									)}>
									<div
										className={cn(
											"block items-center gap-2",
											"md:flex",
											"lg:block",
											"xl:flex"
										)}>
										<div className={cn("flex items-center")}>
											<CloseSquare className='hidden text-secondary md:block lg:hidden xl:block' />
											<Image
												src='/product1.png'
												alt='غذای خشک گربه بالغ سانابل مناسب  گربه های دارای آلرژی'
												width={136}
												height={136}
												className='h-20 w-20 object-cover md:h-32 md:w-32 lg:h-20 lg:w-20 xl:h-32 xl:w-32'
											/>
											<div className='w-full text-xs text-secondary md:w-auto md:text-sm lg:w-full lg:text-xs xl:w-auto xl:text-sm'>
												<h3 className=''>
													غذای خشک گربه بالغ سانابل مناسب گربه های دارای آلرژی
												</h3>
												<div className='w-ful my-2 h-px bg-secondary-50 md:hidden lg:block xl:hidden' />
												<div className='md:hidden lg:block xl:hidden'>
													قیمت محصول : ۶۳۵،۰۰۰ تومان
												</div>
											</div>
										</div>
										<div className='mt-3 flex items-center justify-between md:hidden lg:flex xl:hidden'>
											<div className='text-sm font-medium text-secondary-400'>
												قیمت محصول : <span className='text-primary'>۶۳۵،۰۰۰ تومان</span>
											</div>
											<ItemCount />
										</div>
										<div
											className={cn(
												"hidden text-center text-sm text-black",
												"md:ms-auto md:block md:w-24",
												"lg:hidden",
												"xl:ms-auto xl:block xl:w-24"
											)}>
											950,000 تومان
										</div>
										<div
											className={cn(
												"hidden",
												"md:block md:w-40",
												"lg:hidden xl:block",
												"xl:w-40"
											)}>
											<ItemCount />
										</div>
										<div
											className={cn(
												"hidden text-center text-lg font-semibold text-primary",
												"md:block md:w-32",
												"lg:hidden xl:block",
												"xl:w-32"
											)}>
											950,000 تومان
										</div>
									</div>
								</li>
							</ul>
						</section>
						<div className='my-8 self-stretch bg-secondary-50 max-lg:h-px lg:mx-8 lg:my-0 lg:w-px' />
						<section className='mx-auto w-full max-w-sm lg:w-[325px]'>
							<ul className='persian-number flex flex-col gap-4 text-sm text-secondary md:text-lg md:font-semibold lg:text-sm lg:font-normal xl:text-lg xl:font-semibold'>
								<li className='flex items-center justify-between'>
									<h4>تعداد کالا</h4>
									<p>25</p>
								</li>
								<li className='flex items-center justify-between'>
									<h4>مجموع</h4>
									<p>۵،۰۶۸،۰۰۰ تومان</p>
								</li>
								<li className='flex items-center justify-between'>
									<h4>هزینه ارسال</h4>
									<p>0 تومان</p>
								</li>
								<li className='flex items-center justify-between'>
									<h4>تخفیف</h4>
									<p>0 تومان</p>
								</li>
							</ul>
							<div className='mt-6 flex items-center justify-between border-t border-secondary-50 pt-6 text-lg font-bold'>
								<h4 className='text-secondary'>مجموع :</h4>
								<p className='text-primary'>۵،۰۶۸،۰۰۰ تومان</p>
							</div>
							<button
								type='button'
								className='mt-6 flex w-full items-center justify-center gap-4 rounded-lg bg-primary py-4 text-sm font-medium text-fa'>
								ادامه و تکمیل سفارش
								<Arrow direction='left' variant='2' width={16} height={16} />
							</button>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

function ItemCount() {
	return (
		<div className='inline-flex items-center gap-1 rounded-2xl border border-secondary-50 bg-fa p-2'>
			<button type='button' className='grid h-8 w-12 place-items-center rounded-s-xl bg-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='17'
					height='16'
					viewBox='0 0 17 16'
					fill='none'>
					<path d='M0.5 8.00003H16.5' stroke='#FF5722' stroke-width='3' />
					<path d='M8.5 3.05176e-05L8.5 16' stroke='#FF5722' stroke-width='3' />
				</svg>
			</button>
			<div className='persian-number w-8 text-center text-lg font-bold text-secondary'>9</div>
			<button type='button' className='grid h-8 w-12 place-items-center rounded-e-xl bg-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='17'
					height='16'
					viewBox='0 0 17 16'
					fill='none'>
					<path d='M0.5 8.00003H16.5' stroke='#FF5722' stroke-width='3' />
				</svg>
			</button>
		</div>
	)
}
