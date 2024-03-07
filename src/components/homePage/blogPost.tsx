import Link from "next/link"
import { title } from "process"
import React, { FC } from "react"
import Star from "~/lib/icons/star"

export type TBlogPost = {
	_id: number
	title: string
	image: string
	summery: string
}
const BlogPost: FC<TBlogPost> = ({ title, image, summery, _id }) => {
	return (
		<div className=' flex h-[424px] w-[424px] flex-col gap-6 rounded-3xl bg-white p-7 shadow-lg'>
			<img
				className='h-[202px] w-full rounded-lg'
				src={`http://185.19.201.5:1000/file/${image}`}
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
