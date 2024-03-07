import moment from "jalali-moment"
import React, { FC } from "react"
import Markdown from "react-markdown"
import { e2p } from "~/lib/digitConverter"
import { cn } from "~/lib/utils"
import { SearchTag } from "./searchTag"

type Props = {
	image: string
	writer: { image: string; name: string }
	date: number
	title: string
	tags: string[]
	text: string
}

const Blog: FC<Props> = ({ date, image, tags, text, title, writer }) => {
	return (
		<>
			<img
				src={`http://185.19.201.5:1000/file/${image}`}
				alt=''
				height={800}
				width={500}
				className='h-auto w-full rounded-2xl object-cover'
			/>
			<div className='mt-6 flex flex-col gap-4 md:flex-col-reverse lg:flex-col xl:flex-col-reverse'>
				<div className='flex items-center text-xs font-medium text-secondary md:text-sm lg:text-xs xl:text-sm'>
					<img
						src={`http://185.19.201.5:1000/file/${writer.image}`}
						alt=''
						height={40}
						width={40}
						className='h-8 w-8 rounded-full object-cover md:h-10 md:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10'
					/>
					<div className='ms-2 xl:ms-4'>{writer.name}</div>
					<div className='ms-auto'>
						<span dir='ltr'>
							{e2p(moment(date, "YYYY/MM/DD").locale("fa").format("YYYY/M/D - HH:mm"))}
						</span>
					</div>
				</div>
				<div className='flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between lg:flex-col-reverse lg:items-start xl:flex-row xl:items-center xl:justify-between'>
					<h2 className='text-lg font-bold text-secondary md:text-xl lg:text-lg xl:text-2xl'>
						{title}
					</h2>
					<div className='flex gap-2'>
						{tags.map((item, i) => (
							<div
								key={i}
								className='rounded-full border border-primary px-6 py-2 text-xs text-primary'>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					"mt-5 text-secondary",
					"[&>*:not(:first-child)]:mt-3",
					"[&>h3:not(:first-child)]:mt-5 [&>h3]:text-lg [&>h3]:font-medium",
					"[&>h4:not(:first-child)]:mt-4 [&>h4]:font-medium",
					"[&>ol]:list-inside [&>ol]:list-decimal [&>ul]:list-inside [&>ul]:list-disc",
					"[&>p]:text-sm [&>p]:font-[325] [&>p]:leading-loose"
				)}>
				<Markdown>{text}</Markdown>
			</div>
			<h3 className='mt-11 text-lg font-bold text-secondary md:text-xl lg:text-lg xl:text-2xl'>
				برچسب ها:
			</h3>
			<ul className='mt-6 flex flex-wrap gap-2'>
				{tags.map((item, i) => (
					<SearchTag key={i} text={item} selected={i === 0} />
				))}
			</ul>
		</>
	)
}

export default Blog
