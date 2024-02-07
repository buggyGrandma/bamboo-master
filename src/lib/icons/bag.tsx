import type { SVGProps } from "react"

type BagProps = {
	variant?: 1 | 2
} & SVGProps<SVGSVGElement>

export default function Bag({ variant = 1, ...props }: BagProps) {
	return variant === 1 ? <Bag1 {...props} /> : <Bag2 {...props} />
}

const Bag1 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<g id='Iconly/Curved/Bag'>
			<g id='Bag'>
				<path
					d='M16.3638 6.86985C16.3638 4.48385 14.4298 2.54985 12.0438 2.54985C9.65783 2.53885 7.71583 4.46485 7.70483 6.85085V6.86985'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14.9727 11.3738H14.9267'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M9.14165 11.3738H9.09565'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12.0342 21.4894C5.52619 21.4894 4.77719 19.4394 3.31619 14.0224C1.85019 8.58842 4.79119 6.55542 12.0342 6.55542C19.2772 6.55542 22.2182 8.58842 20.7522 14.0224C19.2912 19.4394 18.5422 21.4894 12.0342 21.4894Z'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</g>
	</svg>
)

const Bag2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<g id='Iconly/Curved/Bag 2'>
			<g id='Bag 2'>
				<path
					d='M15.7499 9.47167V6.43967C15.7549 4.35167 14.0659 2.65467 11.9779 2.64967C9.88887 2.64567 8.19287 4.33467 8.18787 6.42267V9.47167'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M2.94995 14.2074C2.94995 8.91344 5.20495 7.14844 11.969 7.14844C18.733 7.14844 20.988 8.91344 20.988 14.2074C20.988 19.5004 18.733 21.2654 11.969 21.2654C5.20495 21.2654 2.94995 19.5004 2.94995 14.2074Z'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</g>
	</svg>
)
