import React from "react"
import Star from "~/lib/icons/star"

const BlogPost = () => {
	return (
		<div className=' flex h-[424px] w-[424px] flex-col gap-6 rounded-3xl bg-white p-7 shadow-lg'>
			<div className='h-[202px] w-full rounded-lg bg-secondary-400' />

			<p className='text-lg font-semibold text-primary'>
				بیماری های دهان و دندان گربه و راه‌های درمان ؟
			</p>
			<p className='text-sm text-secondary'>
				بی‌پاسخ گذاشتن پرسش‌های خریداران ممکن است مانع فروش شود یا حتی بدتر از آن، باعث شود که
				خریداران نه تنها صفحه خرید
			</p>
			<p className='text-sm font-semibold text-primary'>ادامه مطالب ...</p>
		</div>
	)
}

export default BlogPost
