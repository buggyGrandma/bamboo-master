"use client"
import Link from "next/link"
import Arrow from "~/lib/icons/arrow"
import BlogPost, { TBlogPost } from "./blogPost"
import Carousel from "./carousel"
import { AXIOS } from "../../../axios.config"
import { useQuery } from "@tanstack/react-query"

const BlogSection = () => {
	const fetchBlogs = () =>
		AXIOS.get<TBlogPost[]>("blog/marked/blogs").then((res) => {
			return res.data
		})
	const { data: blogs } = useQuery({
		queryKey: ["blogs"],
		queryFn: fetchBlogs
	})
	return (
		<div className='flex flex-col items-center gap-10  p-10'>
			<h3 className='flex  text-lg font-extrabold text-secondary'>
				وبلاگ<p className='text-primary'>پت شاپ</p>
			</h3>
			{blogs && (
				<Carousel
					input={blogs.map((blog) => (
						<BlogPost
							_id={blog._id}
							image={blog.image}
							summery={blog.summery}
							title={blog.title}
							key={blog.title}
						/>
					))}
				/>
			)}
			<Link
				href='/blog'
				className='rounded-lg border border-primary px-14 py-3 text-xs font-bold text-primary'>
				مشاهده همه
			</Link>
		</div>
	)
}

export default BlogSection
