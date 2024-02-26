"use client"

import { useEffect, useState } from "react"
import { PhoneHeader } from "~/components/phoneHeader"
import { SearchInput } from "~/components/searchInput"
import { cn } from "~/lib/utils"
import CFilter from "./components/CFilter"
import ListItem, { TListItem } from "./components/ListItem"
import RFilter from "./components/RFilter"
import RangeSlider from "./components/RangeSlider"
import SelectedFilters from "./components/SelectedFilters"
import { AXIOS } from "../../../../axios.config"
export type Filter = {
	name: string
	type: string
}
type F = {
	type: string
	filters: string[]
}
export default function Search() {
	const [items, setItems] = useState<TListItem[]>([])
	const lastRowOverflowCountLg = (items.length / 4 - Math.floor(items.length / 4)) * 4
	const smHasOverflow = items.length % 2 > 0
	const defaults = ["brand", "country", "weight"]
	const [filters, setFilter] = useState<Filter[]>([])
	const [newFilters, setNewFilters] = useState<F[]>([])
	useEffect(() => {
		AXIOS.get(
			`product/filter?${defaults
				.map((item) => {
					return {
						type: item,
						filters: filters.filter((e) => e.type === item).flatMap((e) => e.name)
					}
				})
				.map((e) => {
					return e.filters.length ? e.type + "=" + e.filters.map((e) => e) : null
				})
				.filter((e) => e)
				.join("&")}`
		).then((e) => setItems(e.data))
	}, [filters])

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
							type='status'
							options={[["فروش ویژه"], ["کالا های موجود"]]}
						/>
						<RangeSlider className='mt-4' max={6500000} />
						<CFilter
							currents={filters}
							onChange={setFilter}
							title='برند ها :'
							type='brand'
							options={[
								["جیم کت", "Jim Cat"],
								["رویال", "Royal"],
								["رفلکس", "Reflex"]
							]}
						/>
						<CFilter
							type='weight'
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
							type='age'
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
							type='country'
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
								key={i}
								discount={item.discount}
								importantProperties={item.importantProperties}
								price={item.price}
								rate={item.rate}
								subtitle={item.subtitle}
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
