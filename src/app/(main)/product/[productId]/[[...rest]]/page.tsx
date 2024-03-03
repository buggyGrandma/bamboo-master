"use client"
import { PhoneHeader } from "~/components/phoneHeader"
import { Breadcrumb } from "~/components/productPage/breadcrumb"
import { HeadingInfo } from "~/components/productPage/headingInfo"
import { ImageGallery } from "~/components/productPage/imageGallery"
import { InfoSection } from "~/components/productPage/infoSection"

type ProductPageProps = {
	params: {
		productId: string
		rest?: string[]
	}
	searchParams: Record<string, never>
}

export default function ProductPage({ params }: ProductPageProps) {
	console.log(params.productId)
	// const fetchProduct = () => AXIOS.get(`product/${title}`).then((res) => res.data)
	// const { data } = useQuery({
	// 	queryKey: ["product"],
	// 	queryFn: fetchProduct
	// })

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
					<InfoSection id={parseInt(params.productId)} />
				</div>
			</div>
		</div>
	)
}
