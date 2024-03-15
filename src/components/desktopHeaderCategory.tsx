"use client"
import { Popover, Tab } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Arrow from "~/lib/icons/arrow"
import Category from "~/lib/icons/category"
import { cn } from "~/lib/utils"
import { AXIOS } from "../../axios.config"
interface SubType {
	title: string
	subcategoryIcon: string
	icon: string
	classes: string[]
}
export interface InputType {
	animal: string
	animalIcon: string
	subcategories: SubType[]
}
export const DesktopHeaderCategory: React.FC = () => {
	const [input, setInput] = useState<InputType[]>([] as InputType[])
	useEffect(() => {
		AXIOS.get("category/categories")
			.then((results) => setInput(results.data as InputType[]))
			.catch((err) => console.error(err))
	}, [])

	return (
		<Popover as='li' className='relative pb-5'>
			<Popover.Button
				className={cn(
					"flex items-center rounded-lg border-none bg-transparent px-4 py-2 text-sm font-bold text-primary outline-none",
					"before:pointer-events-none before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-primary before:transition-all hover:before:w-[calc(100%_-_2rem)]",
					"before:ui-open:w-[calc(100%_-_2rem)] "
				)}>
				<Category />
				<span className='ms-4 h-4'>دسته بندی کالاها</span>
			</Popover.Button>
			<Popover.Overlay className='fixed inset-0 z-10' />
			<Popover.Panel className='absolute bottom-0 z-10 min-w-[85vw] ui-not-open:hidden' static>
				<div className='flex translate-y-full rounded-b-2xl border bg-white'>
					<Tab.Group vertical>
						<Tab.List className=''>
							{input.map((item) => (
								<Tab
									key={item.animal}
									className='flex min-w-[192px] items-center gap-4 border-b border-l border-secondary-50 px-8 py-4 text-sm text-secondary outline-none last:border-b-0 ui-selected:bg-secondary-50 ui-selected:text-primary'>
									<Image
										width={30}
										height={30}
										src={`${AXIOS.defaults.baseURL}file/${item.animalIcon}`}
										alt={item.animal}
									/>

									{item.animal}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							{input.map((item, i) => (
								<Tab.Panel
									key={i}
									className='whitespace-nowrap px-8 py-6 text-secondary ui-not-selected:hidden'
									static>
									<Link href='/search' className='flex items-center gap-2 p-2 text-xs'>
										همه محصولات گربه
										<Arrow direction='left' variant='2' width={16} height={16} />
									</Link>
									<div className='flex gap-16 pt-6'>
										{item.subcategories.map((category) => {
											return (
												<div key={category.title}>
													<Link
														href='/search'
														className='relative flex items-center gap-4 p-2 text-sm before:absolute before:right-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:translate-x-full before:bg-primary'>
														{category.title}
														<Arrow
															direction='left'
															variant='2'
															width={12}
															height={12}
														/>
													</Link>
													<div className='text-xs [&>*]:mt-4'>
														{category.classes.map((subCategory) => (
															<div key={subCategory}>
																<Link href='/search'>{subCategory}</Link>
															</div>
														))}
													</div>
												</div>
											)
										})}
									</div>
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group>
				</div>
			</Popover.Panel>
		</Popover>
	)
}
