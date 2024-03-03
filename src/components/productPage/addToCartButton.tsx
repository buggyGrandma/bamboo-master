import type { FC } from "react"
import { cn } from "~/lib/utils"

export type AddToCartButtonProps = {
	className?: string
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ className }) => {
	return (
		<div className={cn(className)}>
			<button
				type='button'
				className='w-full rounded-2xl bg-primary px-16 py-4 text-sm font-bold text-fa lg:w-auto'>
				اضافه کردن به سبد خرید
			</button>
			<div className='flex items-center justify-center gap-4'>
				<div className='inline-flex items-center gap-1 rounded-2xl border border-secondary-50 bg-fa p-2'>
					<button
						type='button'
						className='grid h-8 w-12 place-items-center rounded-s-xl bg-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='16'
							viewBox='0 0 17 16'
							fill='none'>
							<path d='M0.5 8.00003H16.5' stroke='#FF5722' strokeWidth='3' />
							<path d='M8.5 3.05176e-05L8.5 16' stroke='#FF5722' strokeWidth='3' />
						</svg>
					</button>
					<div className='persian-number w-8 text-center text-lg font-bold text-secondary'>
						9
					</div>
					<button
						type='button'
						className='grid h-8 w-12 place-items-center rounded-e-xl bg-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='16'
							viewBox='0 0 17 16'
							fill='none'>
							<path d='M0.5 8.00003H16.5' stroke='#FF5722' strokeWidth='3' />
						</svg>
					</button>
				</div>
				<div className='text-sm text-secondary'>در سبد خرید شما</div>
			</div>
		</div>
	)
}
