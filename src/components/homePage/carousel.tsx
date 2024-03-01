import useEmblaCarousel from "embla-carousel-react"
import { ReactNode, useCallback, useEffect, useState } from "react"
import Arrow from "~/lib/icons/arrow"
import "./carouselCSS.css"

const Carousel = ({ input }: { input: ReactNode[] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		direction: "rtl",
		startIndex: 1,
		watchResize: true
	})
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

	return (
		<div className=' relative w-full'>
			<button
				onClick={handlePrev}
				className='absolute right-0 top-1/2 z-10 -translate-y-1/2 p-5'>
				<Arrow className=' text-secondary hover:text-primary' direction='right' />
			</button>
			<div className='embla ' ref={emblaRef}>
				<div className='embla__container m-10 mx-auto max-w-lg overflow-visible '>
					{input.map((item, i) => {
						return (
							<div
								key={i}
								className={`embla__slide m-5 rounded-3xl ${selected === i ? "shadow-2xl" : "blur-sm"}`}>
								{item}
							</div>
						)
					})}
				</div>
			</div>
			<button onClick={handleNext} className='absolute left-0 top-1/2 z-10 -translate-y-1/2 p-5'>
				<Arrow className=' text-secondary hover:text-primary' direction='left' />
			</button>
		</div>
	)
}

export default Carousel
