"use client"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState, type FC } from "react"
import TextComment from "../textComment"
import { InfoSectionSpecItem } from "./infoSectionSpecItem"
import { InfoSectionTabLink } from "./infoSectionTabLink"
import SendComment from "~/lib/icons/sendComment"

type TComment = {
	text: string
	id: number
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
	const [text, setText] = useState("")
	const [rate, setRate] = useState(1)
	const addComment = useMutation({
		mutationFn: async (cmt: TComment) => {
			const { account, text, rate, type, id } = cmt
			const config = {
				headers: {
					token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMDkzOTI2NzMyMjEiLCJpYXQiOjE3MDk0NTIzNjEsImV4cCI6MTcwOTYyNTE2MX0.KibBOc61GLu6akdl4vt0ndCNfXVoBPrMldysHvWw3H4"
				}
			}
			const requestBody = {
				account,
				text,
				rate,
				type,
				id
			}
			const res = await axios.post(
				"http://185.19.201.5:1000/comment/commenting",
				requestBody,
				config
			)
			console.log("Response data:", res.data)
			return res.data
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
	const handleSubmitComment = async () => {
		const result = addComment.mutate({
			text,
			id: 0,
			rate,
			type: "product",
			account: "09392673221"
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
					<div className='relative'>
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
					</div>
					{/* <div className='flex justify-between'>
						<p className='text-lg text-secondary'>نظرات شما:</p>
					</div> */}
				</div>
			</div>
		</div>
	)
}
