"use client"

interface Props {
	label: string
	star?: boolean
	placeholder: string
	OnChange?: (e: string) => void
}
const Input = ({ label, star = false, placeholder, OnChange }: Props) => {
	return (
		<div className='flex w-full flex-col gap-2'>
			<label className='flex gap-1 text-sm font-medium text-secondary-600'>
				{label}
				{star && <p className='text-primary'>*</p>}
			</label>
			<input
				onChange={(e) => OnChange && OnChange(e.target.value)}
				className='h-fit w-full rounded-lg border border-secondary-50 p-4 text-primary outline-none focus:border-primary'
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Input
