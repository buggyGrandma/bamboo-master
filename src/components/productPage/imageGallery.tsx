"use client"
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useState, type FC } from "react"
import { cn } from "~/lib/utils"

export const ImageGallery: FC = () => {
	const [galleryCarouselRef, galleryCarouselApi] = useEmblaCarousel({
		direction: "rtl"
	})
	const [thumbnailCarouselRef, thumbnailCarouselApi] = useEmblaCarousel({
		direction: "rtl",
		align: 0.5,
		dragFree: true
	})
	const [selectedItem, setSelectedItem] = useState(0)

	const onGalleryCarouselSelect = useCallback(
		(api: EmblaCarouselType) => {
			setSelectedItem(api.selectedScrollSnap())
			thumbnailCarouselApi?.scrollTo(api.selectedScrollSnap())
		},
		[thumbnailCarouselApi]
	)

	useEffect(() => {
		if (!galleryCarouselApi) {
			return
		}

		galleryCarouselApi.on("select", onGalleryCarouselSelect)
	}, [galleryCarouselApi, onGalleryCarouselSelect])

	return (
		<div className='overflow-hidden border-b border-secondary-50 pb-8 lg:max-w-[50%] lg:border-e lg:p-8'>
			<div ref={galleryCarouselRef} className='' dir='rtl'>
				<div className='flex h-64 lg:h-auto'>
					{new Array(6).fill(0).map((_, i) => (
						<div key={i} className='min-w-0 flex-shrink-0 flex-grow-0 basis-full'>
							<Image
								src='/product1.png'
								alt='غذای خشک گربه یوریناری اس او رویال کنین'
								width={512}
								height={512}
								sizes='(max-width: 1023px) 100vw, 50vw'
								className='h-full w-full object-contain'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='mt-2 flex items-center justify-center gap-1.5 lg:hidden'>
				{new Array(6).fill(0).map((_, i) => (
					<div
						key={i}
						className={cn(
							"h-2 w-2 rounded-full bg-secondary-100 transition-all",
							i === selectedItem && "w-6 bg-primary"
						)}
					/>
				))}
			</div>
			<div className='mt-10 hidden lg:block'>
				<div ref={thumbnailCarouselRef} className='' dir='rtl'>
					<div className='flex h-24'>
						{new Array(6).fill(0).map((_, i) => (
							<button
								type='button'
								key={i}
								className={cn(
									"relative mx-2 min-w-0 flex-shrink-0 flex-grow-0 basis-24",
									"before:absolute before:-bottom-4 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-primary before:transition-all",
									i === selectedItem && "before:w-16"
								)}
								onClick={() => galleryCarouselApi?.scrollTo(i)}>
								<Image
									src='/product1.png'
									alt='غذای خشک گربه یوریناری اس او رویال کنین'
									width={96}
									height={96}
									className='h-24 w-24 object-contain'
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
