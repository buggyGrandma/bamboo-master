"use client"
import { Popover, Tab } from "@headlessui/react"
import Link from "next/link"
import Arrow from "~/lib/icons/arrow"
import Category from "~/lib/icons/category"
import Profile from "~/lib/icons/profile"
import { cn } from "~/lib/utils"
import axios from "axios"

export const DesktopHeaderCategory: React.FC = () => {
	axios
		.get("http://185.19.201.5:1000/category/categories", {
			headers: { "Access-Control-Allow-Origin": true, "*": true }
		})
		.then((e) => console.log(e))
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
							{new Array(6).fill(0).map((_, i) => (
								<Tab
									key={i}
									className='flex min-w-[192px] items-center gap-4 border-b border-l border-secondary-50 px-8 py-4 text-sm text-secondary outline-none last:border-b-0 ui-selected:bg-secondary-50 ui-selected:text-primary'>
									<Profile width={30} height={30} />
									سگ
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							{new Array(6).fill(0).map((_, i) => (
								<Tab.Panel
									key={i}
									className='whitespace-nowrap px-8 py-6 text-secondary ui-not-selected:hidden'
									static>
									<Link href='/search' className='flex items-center gap-2 p-2 text-xs'>
										همه محصولات گربه
										<Arrow direction='left' variant='2' width={16} height={16} />
									</Link>
									<div className='flex gap-16 pt-6'>
										<div>
											<Link
												href='/search'
												className='relative flex items-center gap-4 p-2 text-sm before:absolute before:right-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:translate-x-full before:bg-primary'>
												غذای گربه
												<Arrow direction='left' variant='2' width={12} height={12} />
											</Link>
											<div className='text-xs [&>*]:mt-4'>
												<div>
													<Link href='/search'>غذای خشک گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای خشک بچه گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای درمانی گربه</Link>
												</div>
												<div>
													<Link href='/search'>کنسرو و پوچ گربه</Link>
												</div>
												<div>
													<Link href='/search'>مالت گربه</Link>
												</div>
												<div>
													<Link href='/search'>تشویقی گربه</Link>
												</div>
												<div>
													<Link href='/search'>مکمل و تقویتی گربه</Link>
												</div>
											</div>
										</div>
										<div>
											<Link
												href='/search'
												className='relative flex items-center gap-4 p-2 text-sm before:absolute before:right-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:translate-x-full before:bg-primary'>
												غذای گربه
												<Arrow direction='left' variant='2' width={12} height={12} />
											</Link>
											<div className='text-xs [&>*]:mt-4'>
												<div>
													<Link href='/search'>غذای خشک گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای خشک بچه گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای درمانی گربه</Link>
												</div>
												<div>
													<Link href='/search'>کنسرو و پوچ گربه</Link>
												</div>
												<div>
													<Link href='/search'>مالت گربه</Link>
												</div>
												<div>
													<Link href='/search'>تشویقی گربه</Link>
												</div>
												<div>
													<Link href='/search'>مکمل و تقویتی گربه</Link>
												</div>
											</div>
										</div>
										<div>
											<Link
												href='/search'
												className='relative flex items-center gap-4 p-2 text-sm before:absolute before:right-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:translate-x-full before:bg-primary'>
												غذای گربه
												<Arrow direction='left' variant='2' width={12} height={12} />
											</Link>
											<div className='text-xs [&>*]:mt-4'>
												<div>
													<Link href='/search'>غذای خشک گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای خشک بچه گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای درمانی گربه</Link>
												</div>
												<div>
													<Link href='/search'>کنسرو و پوچ گربه</Link>
												</div>
												<div>
													<Link href='/search'>مالت گربه</Link>
												</div>
												<div>
													<Link href='/search'>تشویقی گربه</Link>
												</div>
												<div>
													<Link href='/search'>مکمل و تقویتی گربه</Link>
												</div>
											</div>
										</div>
										<div>
											<Link
												href='/search'
												className='relative flex items-center gap-4 p-2 text-sm before:absolute before:right-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:translate-x-full before:bg-primary'>
												غذای گربه
												<Arrow direction='left' variant='2' width={12} height={12} />
											</Link>
											<div className='text-xs [&>*]:mt-4'>
												<div>
													<Link href='/search'>غذای خشک گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای خشک بچه گربه</Link>
												</div>
												<div>
													<Link href='/search'>غذای درمانی گربه</Link>
												</div>
												<div>
													<Link href='/search'>کنسرو و پوچ گربه</Link>
												</div>
												<div>
													<Link href='/search'>مالت گربه</Link>
												</div>
												<div>
													<Link href='/search'>تشویقی گربه</Link>
												</div>
												<div>
													<Link href='/search'>مکمل و تقویتی گربه</Link>
												</div>
											</div>
										</div>
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
