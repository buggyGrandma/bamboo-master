"use client"

import { useState } from "react"
import { PhoneHeader } from "~/components/phoneHeader"
import { SearchInput } from "~/components/searchInput"
import { cn } from "~/lib/utils"
import CFilter from "./components/CFilter"
import ListItem from "./components/ListItem"
import RFilter from "./components/RFilter"
import RangeSlider from "./components/RangeSlider"
import SelectedFilters from "./components/SelectedFilters"

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
	const [filters, setFilter] = useState<string[]>([])
	return (
		<div className='bg-white'>
			<PhoneHeader titleNormal='جستجو' titleColored='محصولات' />
			<div className='px6 p-8 lg:bg-fa'>
				<SearchInput className='ms-0 max-w-none lg:hidden' />
				<div className='flex items-start gap-6'>
					<section className='hidden min-w-[300px] rounded-2xl border border-secondary-50 bg-white lg:block [&>*:not(:first-child)]:border-t [&>*:not(:first-child)]:border-secondary-50'>
						<SelectedFilters currents={filters} setCurrenrs={setFilter} />
						<CFilter
							currents={filters}
							onChange={setFilter}
							title=' وضعیت :'
							options={[["فروش ویژه"], ["کالا های موجود"]]}
						/>
						<RangeSlider className='mt-4' max={6500000} />
						<CFilter
							currents={filters}
							onChange={setFilter}
							title='برند ها :'
							options={[
								["جیم کت", "Jim Cat"],
								["رویال", "Royal"],
								["رفلکس", "Reflex"]
							]}
						/>
						<CFilter
							currents={filters}
							onChange={setFilter}
							title='وزن محصول :'
							options={[
								[" ۱ کیلوگرم", "۵۰"],
								["۲/۵ کیلوگرم", "۳۲"],
								["۵ کیلوگرم", "۶۶"],
								["۱۰ کیلوگرم", "۵۰"],
								["۲۰ کیلوگرم", "۳۲"]
							]}
						/>
						<RFilter
							currents={filters}
							onChange={setFilter}
							title='سن :'
							options={[
								"بالغ",
								"بچه گربه",
								"زیر 1 سال",
								"گربه بالغ",
								"مادر و توله گربه شیرخوار"
							]}
						/>
						<CFilter
							currents={filters}
							onChange={setFilter}
							search
							searchPlaceHilder='ساخت کشور'
							title='کشور سازنده :'
							options={[
								["آلمان", "۵۰"],
								["ایران", "۳۲"],
								["چین", "۶۶"],
								["فرانسه", "۵۰"],
								["ترکیه", "۳۲"]
							]}
						/>
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
