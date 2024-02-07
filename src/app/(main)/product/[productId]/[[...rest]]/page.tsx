import Image from "next/image"
import Link from "next/link"
import { PhoneHeader } from "~/components/phoneHeader"
import { Breadcrumb } from "~/components/productPage/breadcrumb"
import { HeadingInfo } from "~/components/productPage/headingInfo"
import { ImageGallery } from "~/components/productPage/imageGallery"
import { InfoSection } from "~/components/productPage/infoSection"
import Arrow from "~/lib/icons/arrow"
import Star from "~/lib/icons/star"
import TickSquare from "~/lib/icons/tickSquare"
import Work from "~/lib/icons/work"
import { formatPrice } from "~/lib/utils"
import aboutUsImage from "~public/about-us.jpeg"
import fishBowlImage from "~public/fish-bowl-amico.png"
import messengerImage from "~public/messenger-amico.png"
import mobileMarketingImage from "~public/mobile-marketing-bro.png"

type ProductPageProps = {
	params: {
		productId: string
		rest?: string[]
	}
	searchParams: Record<string, never>
}

export default function ProductPage({ params }: ProductPageProps) {
	return (
		<div className='bg-white pb-28 lg:bg-fa'>
			<PhoneHeader titleNormal='جزئیات' titleColored='محصول' />
			<div className='container mt-8 lg:mt-10'>
				<Breadcrumb />
				<div className='bg-white lg:rounded-2xl'>
					<div className='lg:flex'>
						<ImageGallery />
						<HeadingInfo />
					</div>
					<InfoSection />
				</div>
			</div>
		</div>
	)
}
