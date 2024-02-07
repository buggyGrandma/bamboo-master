import type { FC } from "react"
import MainCarousel from "../mainCarousel"

export const CarouselSection: FC = () => {
	return (
		<section className='lg:mx-auto lg:max-w-[1320px] lg:px-[60px]'>
			<MainCarousel />
		</section>
	)
}
