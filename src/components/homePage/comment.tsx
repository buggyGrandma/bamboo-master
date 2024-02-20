import React from "react"
import Star from "~/lib/icons/star"

const Comment = () => {
	return (
		<div className=' flex h-[200px] w-[424px] items-center gap-3 rounded-3xl bg-white p-7 shadow-lg'>
			<div className='h-[80px] w-[80px] rounded-full bg-primary' />
			<div className='flex max-w-[262px] flex-col gap-2'>
				<p className='font-semibold text-secondary'>علیرضا احمدی فرد</p>
				<div className='flex gap-1'>
					{new Array(5).fill(0).map((_, i) => (
						<Star key={i} className='text-amber-500' />
					))}
				</div>
				<p className='text-sm text-secondary'>
					بی‌پاسخ گذاشتن پرسش‌های خریداران ممکن است مانع فروش شود یا حتی بدتر از آن، باعث شود
					که خریداران نه تنها صفحه ...
				</p>
			</div>
		</div>
	)
}

export default Comment
