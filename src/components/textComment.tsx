"use client"

import Star from "~/lib/icons/star"

interface Props {
	label: string
	star?: boolean
	placeholder: string
}
const TextComment = ({ label, star = false, placeholder }: Props) => {
	return (
		<div className='relative flex h-[200px] w-full flex-col gap-2'>
			<label className='flex gap-1 text-sm font-medium text-secondary-600'>
				{label}
				{star && <p className='text-primary'>*</p>}
			</label>
			<textarea
				className='relative h-full w-full resize-none rounded-lg border border-secondary-50 p-4 text-primary outline-none focus:border-primary'
				placeholder={placeholder}
			/>
			<button className='absolute left-4 top-5 flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-white px-12 py-2 text-primary'>
				<svg
					width='20'
					height='16'
					viewBox='0 0 20 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M18 0H4C2.897 0 2 0.897 2 2V7H4V4L10.4 8.8C10.5732 8.92967 10.7837 8.99975 11 8.99975C11.2163 8.99975 11.4268 8.92967 11.6 8.8L18 4V13H10V15H18C19.103 15 20 14.103 20 13V2C20 0.897 19.103 0 18 0ZM11 6.75L4.666 2H17.334L11 6.75Z'
						fill='#FF5722'
					/>
					<path d='M0 8H7V10H0V8ZM2 11H8V13H2V11ZM5 14H9V16H5V14Z' fill='#FF5722' />
				</svg>
				ارسال نظر
			</button>

			<div className='absolute bottom-4 left-4 text-sm text-secondary-400'>
				<div className='mt-2 flex flex-col items-end gap-1'>
					<p className='persian-number text-xs text-secondary-400'>امتیازدهی 1 از 5 </p>
					<div className='flex gap-2'>
						<Star className='text-secondary-400' />
						<Star className='text-secondary-400' />
						<Star className='text-secondary-400' />
						<Star className='text-secondary-400' />
						<Star className='text-secondary-400' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextComment
