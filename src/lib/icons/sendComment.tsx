import React from "react"

const SendComment = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width='20'
			height='16'
			viewBox='0 0 20 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path
				d='M18 0H4C2.897 0 2 0.897 2 2V7H4V4L10.4 8.8C10.5732 8.92967 10.7837 8.99975 11 8.99975C11.2163 8.99975 11.4268 8.92967 11.6 8.8L18 4V13H10V15H18C19.103 15 20 14.103 20 13V2C20 0.897 19.103 0 18 0ZM11 6.75L4.666 2H17.334L11 6.75Z'
				fill='#FF5722'
			/>
			<path d='M0 8H7V10H0V8ZM2 11H8V13H2V11ZM5 14H9V16H5V14Z' fill='#FF5722' />
		</svg>
	)
}

export default SendComment
