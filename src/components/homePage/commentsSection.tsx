"use client"
import useEmblaCarousel from "embla-carousel-react"
import "./carouselCSS.css"
import Comment from "./comment"
import { useState, useEffect, useCallback } from "react"
import Arrow from "~/lib/icons/arrow"

const CommentsSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl", startIndex: 1 })
	const [selected, setSelected] = useState(1)
	const logSlidesInView = useCallback((emblaApi: any) => {
		setSelected(emblaApi.selectedScrollSnap())
	}, [])
	useEffect(() => {
		if (emblaApi) emblaApi.on("settle", logSlidesInView)
	}, [emblaApi, logSlidesInView])
	const handleNext = () => {
		emblaApi?.scrollNext()
	}
	const handlePrev = () => {
		emblaApi?.scrollPrev()
	}
	console.log(selected)
	return (
		<div className='flex flex-col items-center gap-10  p-20'>
			<h3 className='flex  text-lg font-extrabold text-secondary'>
				نظرات<p className='text-primary'>کاربران</p>
			</h3>
			<div className='relative '>
				<button
					onClick={handlePrev}
					className='absolute right-0 top-1/2 z-10 -translate-y-1/2 p-5'>
					<Arrow className=' text-secondary hover:text-primary' direction='right' />
				</button>
				<div className='embla ' ref={emblaRef}>
					<div className='embla__container m-10 max-w-7xl  overflow-visible   '>
						{new Array(5).fill(0).map((_, i) => {
							return (
								<div
									key={i}
									className={`embla__slide m-5 rounded-3xl ${selected === i ? "shadow-2xl" : "blur-sm"}`}>
									<Comment />
								</div>
							)
						})}
					</div>
				</div>
				<button
					onClick={handleNext}
					className='absolute left-0 top-1/2 z-10 -translate-y-1/2 p-5'>
					<Arrow className=' text-secondary hover:text-primary' direction='left' />
				</button>
			</div>
		</div>
	)
}

export default CommentsSection
