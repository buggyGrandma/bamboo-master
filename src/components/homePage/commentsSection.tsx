"use client"
import Carousel from "./carousel"
import Comment from "./comment"

const CommentsSection = () => {
	return (
		<div className='flex flex-col items-center gap-10  p-10'>
			<h3 className='flex  text-lg font-extrabold text-secondary'>
				نظرات<p className='text-primary'>کاربران</p>
			</h3>
			<Carousel input={[<Comment />, <Comment />, <Comment />, <Comment />, <Comment />]} />
		</div>
	)
}

export default CommentsSection
