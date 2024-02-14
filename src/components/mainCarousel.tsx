"use client"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { cn } from "~/lib/utils"
import { AXIOS } from "../../axios.config"

interface Input {
	action: string
	filePath: string
}
export default function MainCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		direction: "rtl",
		watchResize: true
	})
	const [tweenValues, setTweenValues] = useState<number[]>([])
	const [selectedItem, setSelectedItem] = useState(0)

	const onScroll = useCallback(() => {
		if (!emblaApi) {
			return
		}

		const engine = emblaApi.internalEngine()
		const scrollProgress = emblaApi.scrollProgress()

		setSelectedItem(emblaApi.selectedScrollSnap())

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target()
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target)
						if (sign === -1) {
							diffToTarget = scrollSnap - (1 + scrollProgress)
						}
						if (sign === 1) {
							diffToTarget = scrollSnap + (1 - scrollProgress)
						}
					}
				})
			}
			const tweenValue = 1 - Math.abs(diffToTarget * 0.2)
			return Math.min(Math.max(tweenValue, 0), 1)
		})
		setTweenValues(styles)
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) {
			return
		}

		onScroll()
		emblaApi.on("scroll", () => {
			flushSync(() => onScroll())
		})
		emblaApi.on("reInit", onScroll)
	}, [emblaApi, onScroll])
	const [inputs, setInputs] = useState<Input[]>([] as Input[])
	useEffect(() => {
		AXIOS.get("banner").then((res) => {
			setInputs(res.data)
		})
	}, [])
	return (
		<div ref={emblaRef} className='relative overflow-hidden lg:rounded-2xl' dir='rtl'>
			<div className='flex'>
				{inputs.map((item, i) => (
					<div key={i} className='min-w-0 flex-shrink-0 flex-grow-0 basis-[90%] lg:basis-full'>
						<img
							src={`http://185.19.201.5:1000/file/${item.filePath}`}
							alt='slide'
							className='rounded-2xl lg:!scale-100 lg:rounded-none'
							style={{
								...(tweenValues.length && {
									transform: `scale(${tweenValues[i]})`
								})
							}}
						/>
					</div>
				))}
			</div>
			<div className='absolute bottom-6 left-1/2 flex -translate-x-1/2 '>
				{inputs.map((_, i) => (
					<div
						key={i}
						className={cn(
							"mx-1 h-2 w-2 rounded-full bg-fa opacity-50 transition-all duration-200",
							i === selectedItem && "w-5 bg-primary opacity-100"
						)}
						onClick={() => emblaApi?.scrollTo(i)}
					/>
				))}
			</div>
		</div>
	)
}
