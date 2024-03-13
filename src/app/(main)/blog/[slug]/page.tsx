"use client"
import { useMutation, useQuery } from "@tanstack/react-query"
import moment from "jalali-moment"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import Cookies from "universal-cookie"
import Blog from "~/components/blogPage/blog"
import { SearchTag } from "~/components/blogPage/searchTag"
import { PhoneHeader } from "~/components/phoneHeader"
import { TComment } from "~/components/productPage/infoSection"
import { SearchInput } from "~/components/searchInput"
import TextComment from "~/components/textComment"
import SendComment from "~/lib/icons/sendComment"
import Star from "~/lib/icons/star"
import { AXIOS } from "../../../../../axios.config"
import { TBlog } from "../page"

type BlogPageProps = {
	params: { slug: string }
	searchParams: {
		query?: string
		category?: string
		page?: string
	}
}

export type TRecievedComment = {
	name: string
	text: string
	date: number
	rate: number
}
interface ConfigType {
	headers: {
		token: string
	}
}

export default function BlogPage(props: BlogPageProps) {
	const cookies = new Cookies(null, { path: "/" })
	const [text, setText] = useState("")
	const [rate, setRate] = useState(1)
	const addComment = useMutation({
		mutationFn: async (cmt: TComment) => {
			const { account, text, rate, type, id } = cmt
			const config: ConfigType = {
				headers: {
					token: cookies.get("token") as string
				}
			}
			const requestBody = {
				account,
				text,
				rate,
				type,
				id
			}
			const res = await AXIOS.post("comment/commenting", requestBody, config)
			toast.success(res.data as string)
			setText("")
			setRate(1)
			return res.data as string
		}
	})
	const fetchBlog = async () => {
		const res = await AXIOS.get<TBlog>(`blog/${props.params.slug}`)
		return res.data
	}
	const { data: blog } = useQuery({
		queryKey: ["blog"],
		queryFn: fetchBlog
	})
	const fetchComments = async () => {
		const res = await AXIOS.get<TRecievedComment[]>(`comment/article/${props.params.slug}`)
		return res.data
	}
	const { data: comments } = useQuery({
		queryKey: ["blogComments"],
		queryFn: fetchComments
	})
	const handleSubmitComment = async () => {
		const result = addComment.mutate({
			text,
			id: parseInt(props.params.slug),
			rate,
			type: "article",
			account: cookies.get("account") as string
		})
	}
	return (
		<div className='bg-white pb-28 lg:bg-fa'>
			<PhoneHeader titleNormal='وبلاگ' titleColored='پت شاپ' />
			<div className='container mt-8 lg:mt-10'>
				<nav className='' aria-label='breadcrumb'>
					<ol className='flex items-center gap-2 text-sm text-secondary'>
						<li className='text-primary'>
							<Link href='/'>خانه</Link>
						</li>
						/
						<li className=''>
							<Link href='/blog'>وبلاگ پت شاپ</Link>
						</li>
						/
						<li className='pointer-events-none touch-none select-none' aria-current='page'>
							<Link href={`/blog/${blog?.title}`}>{blog?.title}</Link>
						</li>
					</ol>
				</nav>
				<div className='mt-6 flex flex-col gap-6 lg:flex-row lg:items-start'>
					<section className='grow border-secondary-50 bg-white lg:rounded-2xl lg:border lg:p-8'>
						{blog && (
							<Blog
								date={Number(blog.date)}
								image={blog.image}
								tags={blog.tag}
								text={blog.text}
								title={blog.title}
								writer={blog.writer}
							/>
						)}
						<div className='relative mt-8'>
							<button
								className='absolute left-4 top-5 z-10 flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-white px-12 py-2 text-primary'
								onClick={handleSubmitComment}>
								<SendComment />
								ارسال نظر
							</button>
							<TextComment
								OnRateChange={(e) => setRate(e)}
								OnTextChange={(e) => setText(e)}
								label={""}
								placeholder={"نظر خود را وارد کنید ..."}
							/>
							<div className='mt-8 flex flex-col gap-5 text-base font-normal text-stone-600'>
								<p className='mb-5 font-bold'>دیدگاه های شما :</p>
							</div>
						</div>
						{comments &&
							comments.map((comment, i) => (
								<div key={i} className='flex justify-between '>
									<div className='flex w-full gap-2'>
										<div className='h-[40px] w-[40px] rounded-full bg-stone-700' />
										<div className='flex w-full flex-col'>
											<p>{comment.name}</p>
											<p className='text-xs text-stone-400 '>
												{moment(comment.date, "YYYY/MM/DD").format("YYYY/M/DD")}
											</p>
											<p className='mt-3  text-xs'>{comment.text}</p>
										</div>
									</div>
									<div className='w-fit'>
										<div className='flex gap-1 text-xs'>
											{new Array(5).fill(0).map((_, i) => (
												<Star
													key={i}
													className={`${i >= comment.rate ? "text-gray-400" : "text-yellow-400"} `}
												/>
											))}
										</div>
										<p className='mt-3 text-xs'>امتیازدهی {comment.rate} از 5 </p>
									</div>
								</div>
							))}
					</section>
					<section className='hidden lg:block'>
						<div className='w-[425px] max-w-[30vw] rounded-2xl bg-white lg:border lg:border-secondary-50 lg:px-8 lg:py-12'>
							<h3 className='text-sm text-secondary-500'>جستجو در وبلاگ</h3>
							<SearchInput
								className='ms-0 mt-6 max-w-none'
								placeholder='موضوع خود را جستجو کنید'
							/>
							<h3 className='mt-8 text-sm text-secondary-500'>برچسب‌های وبلاگ</h3>
							<ul className='mt-6 flex flex-wrap gap-x-2 gap-y-4'>
								{blog?.tag.map((item, i) => (
									<SearchTag key={i} text={item} selected={i === 0} />
								))}
							</ul>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
