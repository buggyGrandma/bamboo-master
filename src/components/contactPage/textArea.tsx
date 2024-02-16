"use client"
import React, { useState } from "react"
interface Props {
	label: string
	star?: boolean
	placeholder: string
	max: number
}
const TextArea = ({ label, star = false, placeholder, max }: Props) => {
	const [remaining, setRemaining] = useState<number>(max)
	return (
		<div className='relative flex h-full w-full flex-col gap-2'>
			<label className='flex gap-1 text-sm font-medium text-secondary-600'>
				{label}
				{star && <p className='text-primary'>*</p>}
			</label>
			<textarea
				maxLength={max}
				onChange={(e) => setRemaining(max - e.target.value.length)}
				className='relative h-full w-full resize-none rounded-lg border border-secondary-50 p-4 text-primary outline-none focus:border-primary'
				placeholder={placeholder}
			/>
			<p className='absolute bottom-4 left-4 text-sm text-secondary-400'> {remaining}حرف </p>
		</div>
	)
}

export default TextArea
