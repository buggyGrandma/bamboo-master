"use client"

import { useState } from "react"
import Star from "~/lib/icons/star"

interface Props {
	label: string
	star?: boolean
	placeholder: string
	OnTextChange: (e: string) => void
	OnRateChange: (e: number) => void
}
const TextComment = ({ label, star = false, placeholder, OnTextChange, OnRateChange }: Props) => {
	const [rate, setRate] = useState(0)
	return (
		<div className='relative flex h-[200px] w-full flex-col gap-2'>
			<label className='flex gap-1 text-sm font-medium text-secondary-600'>
				{label}
				{star && <p className='text-primary'>*</p>}
			</label>
			<textarea
				onChange={(e) => OnTextChange(e.target.value)}
				className='relative h-full w-full resize-none rounded-lg border border-secondary-50 p-4 text-primary outline-none focus:border-primary'
				placeholder={placeholder}
			/>

			<div className='absolute bottom-4 left-4 text-sm text-secondary-400'>
				<div className='mt-2 flex flex-col items-end gap-1'>
					<p className='persian-number text-xs text-secondary-400'>
						امتیازدهی {rate + 1} از 5{" "}
					</p>
					<div className='flex gap-2'>
						{new Array(5).fill(0).map((_, i) => (
							<label key={i}>
								<input
									className='hidden'
									name='star'
									id={String(i)}
									onChange={(e) => {
										setRate(parseInt(e.target.id))
										OnRateChange(parseInt(e.target.id) + 1)
									}}
									type='radio'
								/>
								<Star
									key={i}
									className={`text-secondary-400 hover:text-orange-200  ${i <= rate && "text-orange-400"}`}
								/>
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextComment
