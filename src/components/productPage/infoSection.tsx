"use client"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState, type FC } from "react"
import TextComment from "../textComment"
import { InfoSectionSpecItem } from "./infoSectionSpecItem"
import { InfoSectionTabLink } from "./infoSectionTabLink"

type CommentData = {
	text: string
	id: number
	token: string
	rate: number
	type: string
	account: string
}

export const InfoSection: FC = () => {
	const [activeSection, setActiveSection] = useState(0)
	const descriptionRef = useRef<HTMLDivElement>(null)
	const specsRef = useRef<HTMLDivElement>(null)
	const commentsRef = useRef<HTMLDivElement>(null)
	const descriptionIsInView = useInView(descriptionRef)
	const specsIsInView = useInView(specsRef, {
		margin: "0px 0px -50% 0px"
	})
	const commentsIsInView = useInView(commentsRef, {
		margin: "0px 0px -50% 0px"
	})
	// const mutation = useMutation("postComment", (postData: CommentData) =>
	// 	fetch("http://185.19.201.5:1000/comment/commenting", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify(postData)
	// 	}).then((res) => res.json())
	// )
	// const addComment = useMutation({
	// 	mutationFn: (cmt: CommentData) =>
	// 		axios.post("http://185.19.201.5:1000/comment/commenting", cmt).then((res) => res.data)
	// })
	// const addComment = useMutation({
	// 	mutationFn: async (cmt: CommentData) => {
	// 		const res = await axios.post("http://185.19.201.5:1000/comment/commenting", cmt)
	// 		console.log("Response data:", res.data)
	// 		return res.data
	// 	}
	// })
	const addComment = useMutation({
		mutationFn: (cmt: CommentData) => {
			const { account, text, rate, type, id } = cmt

			const config = {
				headers: {
					Authorization: "Bearer YOUR_TOKEN_HERE"
				}
			}

			const requestBody = {
				account: account,
				text: text,
				rate: rate,
				type: type,
				id: id
			}

			return axios
				.post("http://185.19.201.5:1000/comment/commenting", requestBody, config)
				.then((res) => {
					console.log("Response data:", res.data)
					return res.data
				})
		}
	})

	useEffect(() => {
		let newActiveSection = activeSection

		if (descriptionIsInView) {
			newActiveSection = 0
		}
		if (specsIsInView) {
			newActiveSection = 1
		}
		if (commentsIsInView) {
			newActiveSection = 2
		}

		setActiveSection(newActiveSection)
	}, [activeSection, commentsIsInView, descriptionIsInView, specsIsInView])
	// const handleSubmitComment = async (commentData) => {
	// 	try {
	// 		await mutation.mutateAsync(commentData)
	// 		console.log("Comment posted successfully!")
	// 	} catch (error) {
	// 		console.error("An error occurred while posting the comment:", error)
	// 	}
	// }
	const handleSubmitComment = async () => {
		const result = addComment.mutate({
			text: "heeellloooo",
			id: 0,
			token: "",
			rate: 0,
			type: "",
			account: ""
		})

		console.log("Result data:", result)
	}
	return (
		<div className='pt-8 lg:p-10 lg:pt-7'>
			<div className='sticky top-0'>
				<ul className='flex items-center bg-white'>
					<li>
						<InfoSectionTabLink
							href='#description'
							text='توضیحات'
							active={activeSection === 0}
						/>
					</li>
					<li>
						<InfoSectionTabLink
							href='#specs'
							text='توضیحات تکمیلی'
							active={activeSection === 1}
						/>
					</li>
					<li>
						<InfoSectionTabLink
							href='#comments'
							text='نظرات کاربران'
							active={activeSection === 2}
						/>
					</li>
				</ul>
			</div>
			<section ref={descriptionRef} id='description' className='mt-4'>
				<div className='rounded-2xl border border-secondary-50 bg-fa p-6 text-sm text-secondary lg:p-10'>
					<h2 className='text-xs font-bold lg:text-lg'>نقد و بررسی:</h2>
					<h3 className='mt-3 font-bold'>غذای خشک سگ مینی لایت ویت رویال کنین</h3>
					<p className='mt-3'>
						باسلام خدمت کاربران خوب پت شاپ آنلاین تام وجری درخدمتتون هستیم با معرفی یک محصول
						خوب به نام غذای خشک سگ مینی لایت ویت رویال کنین – royalcanin غذا خشک سگ بالغ لایت
						ویت کر رویال کنین ساخته شده برای سگ های نژاد کوچک می باشد و قابلیت هضم بسیار
						بالایی دارد. فروش این محصول به صورت بسته بندی های اورجینال میباشد. قیمت درج شده
						روی کالا برای بسته 3kg است.
					</p>
					<ul className='ms-5 mt-3 list-disc [&>li:not(:first-child)]:mt-1'>
						<li>غذای رژیمی مخصوص سگ های نژاد کوچک</li>
						<li>غنی از انواع ویتامین ها، پروتئین باکیفیت و مواد معدنی</li>
						<li>کالری کم آن کمک کننده به کاهش یا حفظ وزن میشود</li>
						<li>جلوگیری از جرم دندان</li>
						<li>دارای پروتئین مرغوب با سطح چربی پایین</li>
						<li>ساخت فرانسه</li>
					</ul>
				</div>
			</section>
			<div ref={specsRef} id='specs' className='mt-4 lg:mt-8'>
				<div className='lg:py lg:px-16-10 rounded-2xl border border-secondary-50 bg-fa p-6 text-sm text-secondary'>
					<ul className='grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2 lg:gap-y-4 xl:grid-cols-3'>
						<InfoSectionSpecItem title='وزن:' value='3 Kg' />
						<InfoSectionSpecItem title='برند:' value='رویال کنین' />
						<InfoSectionSpecItem title='تاریخ انقضا:' value='2024/01' />
						<InfoSectionSpecItem title='کشور سازنده:' value='فرانسه' />
						<InfoSectionSpecItem title='وزن:' value='3 Kg' />
					</ul>
				</div>
			</div>
			<div ref={commentsRef} id='comments' className='mt-4 lg:mt-8'>
				<div className='lg:py lg:px-16-10 rounded-2xl border border-secondary-50 bg-fa p-6 text-sm text-secondary'>
					<TextComment label={""} placeholder={"نظر خود را وارد کنید ..."}></TextComment>
					<button onClick={handleSubmitComment}>Submit Comment</button>
					{/* <div className='flex justify-between'>
						<p className='text-lg text-secondary'>نظرات شما:</p>
					</div> */}
				</div>
			</div>
		</div>
	)
}
