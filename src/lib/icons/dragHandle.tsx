export default function DragHandle(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<g id='Generic=drag-handle, Type=stroke, Size=24px'>
				<path
					id='burger-regular'
					d='M16.5 5.25L16.5 18M7.5 5.25L7.5 18M12 5.25L12 18'
					stroke='currentColor'
					strokeLinecap='round'
				/>
			</g>
		</svg>
	)
}
