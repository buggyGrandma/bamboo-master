"use client"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { SearchTag } from "~/components/blogPage/searchTag"
import { PhoneHeader } from "~/components/phoneHeader"
import { SearchInput } from "~/components/searchInput"
import { cn } from "~/lib/utils"
import { AXIOS } from "../../../../axios.config"

export type TBlog = {
	title: string
	text: string
	summery: string
	image: string
	mark: string
	tag: string[]
	date: string
	writer: {
		name: string
		image: string
	}
}

type BlogPageProps = {
	searchParams: {
		query?: string
		category?: string
		page?: string
	}
}

// export const metadata = {
// 	title: "وبلاگ"
// }

export default function BlogsPage(props: BlogPageProps) {
	const fetchBlogs = async () => {
		const res = await AXIOS.get<TBlog[]>("blog/list/1")
		return res.data
	}
	const { data: blogs } = useQuery({
		queryKey: ["blogs"],
		queryFn: fetchBlogs
	})
	return (
		<div className='bg-white pb-28 lg:bg-fa'>
			{/* <div className='flex'>
				{blogs?.map((blog, i) => (
					<div
						key={i}
						className={cn(
							"mx-1 min-w-0 max-w-full flex-shrink-0 flex-grow-0 basis-48 lg:mx-2 lg:basis-60 xl:basis-64 2xl:basis-72",
							i === 0 && "ms-6 lg:ms-2",
							i === 5 && "me-6 lg:me-12"
						)}>
						<div>{blog.mark}</div>
					</div>
				))}
			</div> */}
			<PhoneHeader titleNormal='وبلاگ' titleColored='پت شاپ' />
			<div className='container mt-8 lg:mt-10'>
				<h2 className='ms-3 hidden text-sm text-secondary lg:block'>
					<span>وبلاگ</span> <span className='text-primary'>پت شاپ</span>
				</h2>
				<div className='flex flex-col-reverse gap-6 lg:mt-6 lg:flex-row lg:items-start'>
					<section className='grow border-secondary-50 bg-white max-lg:border-t lg:rounded-2xl lg:border'>
						<ul
							className={cn(
								"[&>li:not(:first-of-type)]:border-t [&>li:not(:first-of-type)]:border-secondary-50 [&>li]:py-8",
								"lg:[&>li]:px-8"
							)}>
							{blogs?.slice(0, 3).map((blog) => (
								<li
									className={cn(
										"flex flex-col gap-4",
										"md:flex-row md:gap-8",
										"lg:flex-col lg:gap-4",
										"xl:flex-row xl:gap-8"
									)}>
									<img
										src={`http://185.19.201.5:1000/file/${blog?.image}`}
										alt=''
										height={256}
										width={400}
										className={cn(
											"h-52 w-full rounded-2xl object-cover",
											"md:w-52",
											"lg:w-full",
											"xl:h-64 xl:w-64"
										)}
									/>
									<div className='flex flex-col gap-[18px]'>
										<div className='flex items-center text-xs text-secondary xl:text-sm'>
											<img
												src={`http://185.19.201.5:1000/file/${blog?.writer.image}`}
												alt=''
												height={40}
												width={40}
												className={cn(
													"h-8 w-8 rounded-full object-cover",
													"md:h-10 md:w-10",
													"lg:h-8 lg:w-8",
													"xl:h-10 xl:w-10"
												)}
											/>
											<div className='ms-2 xl:ms-4'>{blog.writer.name}</div>
											<div className='ms-auto'>
												<span dir='ltr'>۱۳۹۸/۱۰/۲۱ - ۱۲:۵۰</span>
											</div>
										</div>
										<h3 className='text-lg font-bold text-secondary xl:text-2xl xl:font-extrabold'>
											{blog.title}
										</h3>
										<div className='flex flex-wrap gap-1'>
											{blog.tag.map((item) => (
												<div className='hidden self-start rounded-full border border-primary px-6 py-2 text-xs text-primary md:block lg:hidden xl:block'>
													{item}
												</div>
											))}
										</div>

										<p className='text-sm text-secondary'>
											{blog.summery}
											<Link
												href={`/blog/${blog.title}`}
												className='ms-1 hidden font-semibold text-primary underline underline-offset-4 md:inline-block lg:hidden xl:inline-block'>
												ادامه مطالب
											</Link>
										</p>
										<div className='grid grid-cols-2 gap-4 md:hidden lg:grid xl:hidden'>
											<Link
												href={`/blog/${blog.title}`}
												className='rounded-lg bg-primary py-4 text-center text-sm font-semibold text-fa'>
												ادامه مطالب
											</Link>
											<div className='rounded-lg border border-primary py-4 text-center text-sm font-semibold text-primary'>
												{blog.tag[0]}
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</section>
					<div className=''>
						<section className='rounded-2xl bg-white lg:w-[425px] lg:border lg:border-secondary-50 lg:px-8 lg:py-12'>
							<h3 className='text-sm text-secondary-500'>جستجو در وبلاگ</h3>
							<SearchInput
								className='ms-0 mt-6 max-w-none'
								placeholder='موضوع خود را جستجو کنید'
							/>
							<h3 className='mt-8 text-sm text-secondary-500'>برچسب‌های وبلاگ</h3>
							{blogs && (
								<ul className='mt-6 flex flex-wrap gap-x-2 gap-y-4'>
									{blogs[0]?.tag.map((item, i) => (
										<SearchTag text={item} selected={i === 0} />
									))}
								</ul>
							)}
						</section>
						<section className=''>
							<h3 className='text-sm text-secondary-500'>
								محبوب ترین در <span className='text-primary'>وبلاگ</span>
							</h3>
							<div className='rounded-2xl bg-white lg:w-[425px] lg:border lg:border-secondary-50 lg:px-8 lg:py-12'>
								<ul className='mt-6 flex flex-col flex-wrap gap-x-2 gap-y-4'>
									{blogs &&
										blogs.slice(0, 4).map((blog) => (
											<li className='flex '>
												<img
													src={`http://185.19.201.5:1000/file/${blog?.image}`}
													alt=''
													height={50}
													width={50}
													className={cn()}
												/>
												<div>
													<h3 className='text-xs text-secondary xl:text-sm'>
														{blog.title}
													</h3>
													<div className='ms-auto'>
														<span dir='ltr'>۱۳۹۸/۱۰/۲۱ - ۱۲:۵۰</span>
													</div>
												</div>
											</li>
										))}
								</ul>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}
