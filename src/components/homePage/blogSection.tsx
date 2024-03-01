"use client"
import Link from "next/link"
import Arrow from "~/lib/icons/arrow"
import BlogPost from "./blogPost"
import Carousel from "./carousel"

const BlogSection = () => {
	return (
		<div className='flex flex-col items-center gap-10  p-10'>
			<h3 className='flex  text-lg font-extrabold text-secondary'>
				وبلاگ<p className='text-primary'>پت شاپ</p>
			</h3>
			<Carousel input={[<BlogPost />, <BlogPost />, <BlogPost />]} />
			<Link
				href='/blog'
				className='rounded-lg border border-primary px-14 py-3 text-xs font-bold text-primary'>
				مشاهده همه
			</Link>
		</div>
	)
}

export default BlogSection
