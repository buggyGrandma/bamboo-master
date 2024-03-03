"use client"
import { useQuery } from "@tanstack/react-query"
import { PhoneHeader } from "~/components/phoneHeader"
import { Breadcrumb } from "~/components/productPage/breadcrumb"
import { HeadingInfo } from "~/components/productPage/headingInfo"
import { ImageGallery } from "~/components/productPage/imageGallery"
import { InfoSection } from "~/components/productPage/infoSection"
import { AXIOS } from "../../../../../../axios.config"
import { ISalesItem } from "~/components/homePage/saleSection"

type ProductPageProps = {
	params: {
		productId: string
		rest?: string[]
	}
	searchParams: Record<string, never>
}

export default function ProductPage({ params }: ProductPageProps) {
	const fetchProduct = () =>
		AXIOS.get<ISalesItem>(`product/${params.productId}`).then((res) => {
			return res.data
		})
	const { data } = useQuery({
		queryKey: ["product"],
		queryFn: fetchProduct
	})

	return (
		<div className='bg-white pb-28 lg:bg-fa'>
			<PhoneHeader titleNormal='جزئیات' titleColored='محصول' />
			<div className='container mt-8 lg:mt-10'>
				{data && <Breadcrumb title={data?.title} />}
				<div className='bg-white lg:rounded-2xl'>
					<div className='lg:flex'>
						<ImageGallery />
						{data && <HeadingInfo {...data} />}
					</div>
					{data && <InfoSection {...data} />}
				</div>
			</div>
		</div>
	)
}
