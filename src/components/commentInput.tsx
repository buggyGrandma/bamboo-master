"use client"
import React, { useState } from "react"
import SendComment from "~/lib/icons/sendComment"
import TextComment from "./textComment"
interface Props {
	onSubmit: () => void
	setText: (e: string) => void
	setRate: (e: number) => void
}
const CommentInput = ({ OnChange }: { OnChange: () => void }) => {
	return (
		<div className='relative mt-8'>
			<button
				className='absolute left-4 top-5 z-10 flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-white px-12 py-2 text-primary'
				onClick={OnChange}>
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
	)
}

export default CommentInput
