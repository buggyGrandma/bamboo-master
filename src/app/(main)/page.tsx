import { CarouselSection } from "~/components/homePage/carouselSection"
import CategorySection from "~/components/homePage/categorySection"
import CommentsSection from "~/components/homePage/commentsSection"
import { FeatureSection } from "~/components/homePage/featureSection"
import { InfoSection } from "~/components/homePage/infoSection"
import { SaleSection } from "~/components/homePage/saleSection"
import { PhoneHeader } from "~/components/phoneHeader"

export default function Home() {
	return (
		<>
			<PhoneHeader titleNormal='' titleColored='بامبو' />
			<div className='mt-4 lg:mt-8'>
				<CarouselSection />
				<FeatureSection />
				<SaleSection />
				<CategorySection />
				<CommentsSection />
				<InfoSection />
			</div>
		</>
	)
}
