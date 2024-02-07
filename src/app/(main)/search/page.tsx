"use client"
import { Disclosure, RadioGroup, Switch } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState, type FC } from "react"
import ReactSlider from "react-slider"
import { PhoneHeader } from "~/components/phoneHeader"
import { SearchInput } from "~/components/searchInput"
import Arrow from "~/lib/icons/arrow"
import Check from "~/lib/icons/check"
import DragHandle from "~/lib/icons/dragHandle"
import Minus from "~/lib/icons/minus"
import Star from "~/lib/icons/star"
import { cn, formatPrice } from "~/lib/utils"

export default function Search() {
	const items = [
		{
			id: "1",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			newPrice: 3990000,
			href: "/product/1",
			image: "/product1.png"
		},
		{
			id: "2",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/2",
			image: "/product1.png"
		},
		{
			id: "3",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/3",
			image: "/product1.png"
		},
		{
			id: "4",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/4",
			image: "/product1.png"
		},
		{
			id: "5",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/5",
			image: "/product1.png"
		},
		{
			id: "6",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/6",
			image: "/product1.png"
		},
		{
			id: "7",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/7",
			image: "/product1.png"
		},
		{
			id: "8",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/8",
			image: "/product1.png"
		},
		{
			id: "9",
			weight: "4 Kg",
			stars: 4.5,
			title: "غذای خشک گربه یوریناری اس او رویال کنین",
			price: 4090000,
			href: "/product/9",
			image: "/product1.png"
		}
	]

	const lastRowOverflowCountLg = (items.length / 4 - Math.floor(items.length / 4)) * 4
	const smHasOverflow = items.length % 2 > 0

	return (
		<div className='bg-white'>
			<PhoneHeader titleNormal='جستجو' titleColored='محصولات' />
			<div className='px6 p-8 lg:bg-fa'>
				<SearchInput className='ms-0 max-w-none lg:hidden' />
				<div className='flex items-start gap-6'>
					<section className='hidden min-w-[300px] rounded-2xl border border-secondary-50 bg-white lg:block [&>*:not(:first-child)]:border-t [&>*:not(:first-child)]:border-secondary-50'>
						<div className='px-4 py-6'>
							<div className='flex items-center justify-between'>
								<h3 className='text-sm text-secondary'>فیلتر ها :</h3>
								<button
									type='button'
									className='text-xs text-secondary-400 underline underline-offset-4'>
									پاک کردن همه
								</button>
							</div>
							<ul className='mt-8 flex flex-wrap gap-2'>
								<li>
									<button
										type='button'
										className='flex h-6 items-center gap-2 rounded-lg bg-primary px-2 text-xs text-white'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='6'
											height='6'
											viewBox='0 0 6 6'
											fill='none'>
											<path
												d='M5.154 0L3 2.154L0.846 0L0 0.846L2.154 3L0 5.154L0.846 6L3 3.846L5.154 6L6 5.154L3.846 3L6 0.846L5.154 0Z'
												fill='white'
											/>
										</svg>
										<div className=''>فروش ویژه</div>
									</button>
								</li>
								<li>
									<button
										type='button'
										className='flex h-6 items-center gap-2 rounded-lg bg-primary px-2 text-xs text-white'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='6'
											height='6'
											viewBox='0 0 6 6'
											fill='none'>
											<path
												d='M5.154 0L3 2.154L0.846 0L0 0.846L2.154 3L0 5.154L0.846 6L3 3.846L5.154 6L6 5.154L3.846 3L6 0.846L5.154 0Z'
												fill='white'
											/>
										</svg>
										<div className=''>جیم کت</div>
									</button>
								</li>
								<li>
									<button
										type='button'
										className='flex h-6 items-center gap-2 rounded-lg bg-primary px-2 text-xs text-white'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='6'
											height='6'
											viewBox='0 0 6 6'
											fill='none'>
											<path
												d='M5.154 0L3 2.154L0.846 0L0 0.846L2.154 3L0 5.154L0.846 6L3 3.846L5.154 6L6 5.154L3.846 3L6 0.846L5.154 0Z'
												fill='white'
											/>
										</svg>
										<div className=''>جیم کت</div>
									</button>
								</li>
								<li>
									<button
										type='button'
										className='flex h-6 items-center gap-2 rounded-lg bg-primary px-2 text-xs text-white'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='6'
											height='6'
											viewBox='0 0 6 6'
											fill='none'>
											<path
												d='M5.154 0L3 2.154L0.846 0L0 0.846L2.154 3L0 5.154L0.846 6L3 3.846L5.154 6L6 5.154L3.846 3L6 0.846L5.154 0Z'
												fill='white'
											/>
										</svg>
										<div className=''>فروش ویژه</div>
									</button>
								</li>
							</ul>
						</div>
						<div className='px-4 py-6'>
							<Disclosure>
								<Disclosure.Button className='flex h-8 w-full items-center justify-between text-sm text-secondary'>
									<h3>برند ها :</h3>
									<Arrow
										direction='down'
										variant='2'
										className='transition-all ui-open:rotate-180'
									/>
								</Disclosure.Button>
								<Disclosure.Panel className='mt-4'>
									<Switch.Group>
										<div className='flex items-center'>
											<Switch
												name='brand'
												className='grid h-4 w-4 place-items-center rounded-[5px] border border-secondary text-white hover:border-primary ui-checked:border-primary ui-checked:bg-primary'>
												<Check className='mr-px' />
											</Switch>
											<Switch.Label className='ms-2 flex flex-grow items-center justify-between'>
												<div className='text-sm text-secondary'>جیم کت</div>
												<div className='text-sm text-secondary-400'>Jim Cat</div>
											</Switch.Label>
										</div>
									</Switch.Group>
								</Disclosure.Panel>
							</Disclosure>
						</div>
						<div className='px-4 py-6'>
							<h3 className='text-sm text-secondary'>قیمت محصول :</h3>
							<RangeSlider className='mt-4' max={6500000} />
						</div>
						<div className='px-4 py-6'>
							<Disclosure>
								<Disclosure.Button className='flex h-8 w-full items-center justify-between text-sm text-secondary'>
									<h3>سن :</h3>
									<Arrow
										direction='down'
										variant='2'
										className='transition-all ui-open:rotate-180'
									/>
								</Disclosure.Button>
								<Disclosure.Panel className='mt-4'>
									<RadioGroup name='age' value={0} className='flex flex-col gap-2'>
										{["بالغ", "بچه گربه", "زیر 1 سال", "گربه بالغ"].map((age, i) => (
											<RadioGroup.Option
												key={i}
												value={i}
												className='group flex cursor-pointer items-center gap-3 text-sm'>
												<div
													className={cn(
														"relative h-4 w-4 rounded-full border border-secondary",
														"before:[content=''] before:absolute before:left-1/2 before:top-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full",
														"group-hover:border-primary",
														"ui-checked:border-primary ui-checked:before:bg-primary"
													)}
												/>
												{age}
											</RadioGroup.Option>
										))}
									</RadioGroup>
								</Disclosure.Panel>
							</Disclosure>
						</div>
					</section>
					<section className='mt-6 grid w-full grid-cols-1 bg-white sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:rounded-2xl lg:border lg:border-secondary-50'>
						{items.map((item, i) => (
							<ListItem
								key={item.id}
								item={item}
								className={cn(
									smHasOverflow && "sm:max-lg:[&:nth-last-child(2)]:border-b",
									lastRowOverflowCountLg < items.length - i && "lg:border-b",
									lastRowOverflowCountLg === 0 &&
										items.length - 1 === i &&
										"lg:rounded-bl-2xl",
									i + (lastRowOverflowCountLg === 0 ? 4 : lastRowOverflowCountLg) ===
										items.length && "lg:rounded-br-2xl"
								)}
							/>
						))}
					</section>
				</div>
			</div>
		</div>
	)
}

type RangeSliderProps = {
	max: number
	className?: string
}

const RangeSlider: FC<RangeSliderProps> = ({ max, className }) => {
	const [values, setValues] = useState([0, max])

	const start = max - values[1]!
	const end = max - values[0]!

	const startPercent = 100 - (end / max) * 100
	const endPercent = 100 - (start / max) * 100

	const onChange = useCallback((value: number[]) => {
		setValues(value)
	}, [])

	return (
		<div className={cn(className)}>
			<div className='relative'>
				<ReactSlider
					className='h-8 w-full'
					defaultValue={values}
					onChange={onChange}
					max={max}
					step={10000}
					ariaLabelledby={["min-label", "max-label"]}
					ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
					renderThumb={(props, _state) => (
						<div
							{...props}
							className='cursor-pointer rounded-lg border border-secondary-50 bg-white p-1 text-secondary outline-none transition-shadow hover:shadow-lg active:shadow-md'>
							<DragHandle />
						</div>
					)}
				/>
				<div
					className={"absolute left-0 top-1/2 h-1 w-full -translate-y-1/2"}
					style={{
						background: `linear-gradient(90deg, #eceff1 0%, #eceff1 ${startPercent}%, #ff5722 ${startPercent}%, #ff5722 ${endPercent}%, #eceff1 ${endPercent}%, #eceff1 100%)`
					}}
				/>
			</div>
			<div className='persian-number mt-4 flex items-center gap-2'>
				<label
					id='min-label'
					className={cn(
						"flex h-8 w-full items-center justify-center rounded-lg border border-secondary-50 bg-white text-xs",
						start === 0 ? "text-secondary-400" : "text-primary"
					)}>
					{formatPrice(start)} تومان
				</label>
				<Minus className='h-6 min-w-[24px] text-secondary' />
				<label
					id='max-label'
					className={cn(
						"flex h-8 w-full items-center justify-center rounded-lg border border-secondary-50 bg-white text-xs",
						end === max ? "text-secondary-400" : "text-primary"
					)}>
					{formatPrice(end)} تومان
				</label>
			</div>
		</div>
	)
}

type ListItemProps = {
	item: {
		weight: string
		image: string
		stars: number
		title: string
		price: number
		newPrice?: number
		href: string
	}
	className?: string
}

const ListItem: FC<ListItemProps> = ({ item, className }) => {
	const { weight, stars, image, title, price, newPrice, href } = item

	return (
		<Link
			href={href}
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
				src={image}
				alt={title}
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
					{stars.toLocaleString("fa-ir")}
				</div>
			</div>
			<h3 className='mt-6 text-sm text-secondary'>{title}</h3>
			<div className='mt-6 flex flex-col gap-2 lg:flex-row-reverse lg:items-start lg:justify-between lg:self-stretch'>
				<div className='text-sm font-bold text-primary'>
					{formatPrice(!!newPrice ? newPrice : price)} تومان
				</div>
				{!!newPrice && (
					<div className='text-xs text-secondary-400 line-through'>
						{formatPrice(price)} تومان
					</div>
				)}
			</div>
		</Link>
	)
}
