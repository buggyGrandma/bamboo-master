"use client"
import { useMutation } from "@tanstack/react-query"
import Cookies from "universal-cookie"
import axios from "axios"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState, type FC } from "react"
import TextComment from "../textComment"
import { InfoSectionSpecItem } from "./infoSectionSpecItem"
import { InfoSectionTabLink } from "./infoSectionTabLink"
import SendComment from "~/lib/icons/sendComment"
import { ISalesItem } from "../homePage/saleSection"
import { toast } from "sonner"

type TComment = {
	text: string
	id: number
	rate: number
	type: string
	account: string
}

export const InfoSection = ({
	_id,
	importantProperties: { weight, expiration },
	description,
	normalProperties: { country, brand }
}: ISalesItem) => {
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
	const cookies = new Cookies(null, { path: "/" })
	const addComment = useMutation({
		mutationFn: async (cmt: TComment) => {
			const { account, text, rate, type, id } = cmt
			const config = {
				headers: {
					token: cookies.get("token")
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
			toast.success(res.data)
			setText("")
			setRate(1)
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
			id: _id,
			rate,
			type: "product",
			account: cookies.get("account")
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
					<p>{description}</p>
				</div>
			</section>
			<div ref={specsRef} id='specs' className='mt-4 lg:mt-8'>
				<div className='lg:py lg:px-16-10 rounded-2xl border border-secondary-50 bg-fa p-6 text-sm text-secondary'>
					<ul className='grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2 lg:gap-y-4 xl:grid-cols-3'>
						<InfoSectionSpecItem title='وزن:' value={weight} />
						<InfoSectionSpecItem title='برند:' value={brand} />
						<InfoSectionSpecItem title='تاریخ انقضا:' value={expiration} />
						<InfoSectionSpecItem title='کشور سازنده:' value={country} />
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
