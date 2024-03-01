"use client"
import { useQuery } from "@tanstack/react-query"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import Arrow from "~/lib/icons/arrow"
import { cn } from "~/lib/utils"
import { AXIOS } from "../../../axios.config"
import { SaleItem } from "./saleItem"
interface ISalesItem {
	classes: string[]
	description: string
	discount: number
	importantProperties: {
		expiration: string
		weight: string
	}
	normalProperties: { country: string; brand: string }
	price: number
	rate: number
	remaining: number
	special: boolean
	subtitle: string
	title: string
	_id: number
}
export const SaleSection: FC = () => {
	const [emblaRef] = useEmblaCarousel({
		direction: "rtl",
		watchResize: true,
		dragFree: true
	})
	const fetchSpecials = async () => {
		const res = await AXIOS.get<{ products: ISalesItem[] }>("product/special")
		return res.data
	}
	const { data } = useQuery({
		queryKey: ["sepcials"],
		queryFn: fetchSpecials
	})
	return (
		<section className='mt-6 lg:container lg:mt-16'>
			<div className='bg-primary py-6 lg:rounded-2xl lg:py-12'>
				<div className='mx-6 flex items-center justify-between lg:hidden'>
					<Image src='/special-sale.svg' alt='فروش ویژه' width={72} height={28} className='' />
					<Link href='/search' className='flex items-center gap-2 text-xs font-bold text-fa'>
						مشاهده همه
						<Arrow direction='left' variant='2' width={16} height={16} />
					</Link>
				</div>
				<div className='mt-4 flex items-center lg:mt-0 '>
					<div className='mx-8 hidden min-w-0 max-w-full flex-shrink-0 flex-grow-0 basis-auto lg:block'>
						<div className='m-auto'>
							<Image
								src='/special-sale.svg'
								alt='فروش ویژه'
								width={159}
								height={61}
								className='mx-auto'
							/>
							<Image
								src='/special-box.png'
								alt='فروش ویژه'
								width={185}
								height={168}
								className='mx-auto'
							/>
							<Link
								href='/search'
								className='mx-auto flex items-center justify-center gap-2 rounded-lg border border-fa px-8 py-4 text-sm font-bold text-fa'>
								مشاهده همه
								<Arrow direction='left' variant='2' width={16} height={16} />
							</Link>
						</div>
					</div>
					<div ref={emblaRef} className='overflow-hidden' dir='rtl'>
						<div className='flex'>
							{data?.products.slice(0, 10).map((product, i) => (
								<div
									key={i}
									className={cn(
										"mx-1 min-w-0 max-w-full flex-shrink-0 flex-grow-0 basis-48 lg:mx-2 lg:basis-60 xl:basis-64 2xl:basis-72",
										i === 0 && "ms-6 lg:ms-2",
										i === 5 && "me-6 lg:me-12"
									)}>
									<SaleItem
										discount={product.discount}
										expiration={product.importantProperties.expiration}
										price={product.price}
										remaining={product.remaining}
										title={product.title}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
