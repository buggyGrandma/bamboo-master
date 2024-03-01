"use client"
import { useQuery } from "@tanstack/react-query"
import { AXIOS } from "../../../axios.config"
import Carousel from "./carousel"
import Comment, { TComment } from "./comment"

const CommentsSection = () => {
	const fetchComments = () =>
		AXIOS.get<TComment[]>("comment/chosen").then((res) => {
			console.log(res.data)
			return res.data
		})
	const { data: comments } = useQuery({
		queryKey: ["comments"],
		queryFn: fetchComments
	})
	return (
		<div className='flex flex-col items-center gap-10  p-10'>
			<h3 className='flex  text-lg font-extrabold text-secondary'>
				نظرات<p className='text-primary'>کاربران</p>
			</h3>
			{comments && (
				<Carousel
					input={comments.map((comment) => (
						<Comment name={comment.name} rate={comment.rate} text={comment.text} />
					))}
				/>
			)}
		</div>
	)
}

export default CommentsSection
