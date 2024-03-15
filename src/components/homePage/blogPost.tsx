import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { AXIOS } from "../../../axios.config"

export type TBlogPost = {
	_id: number
	title: string
	image: string
	summery: string
}
const BlogPost: FC<TBlogPost> = ({ title, image, summery, _id }) => {
	return (
		<div className=' flex h-[424px] w-[424px] flex-col gap-6 rounded-3xl bg-white p-7 shadow-lg'>
			<Image
				width={257}
				height={254}
				className='h-[202px] w-full rounded-lg'
				src={`${AXIOS.defaults.baseURL}file/${image}`}
				alt=''
			/>

			<p className='text-lg font-semibold text-primary'>{title} </p>
			<p className='text-sm text-secondary'>{summery} </p>
			<Link href={`/blog/${_id}`}>
				<p className='text-sm font-semibold text-primary'>ادامه مطالب ...</p>
			</Link>
		</div>
	)
}

export default BlogPost
