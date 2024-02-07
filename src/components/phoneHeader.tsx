import type { ReactNode } from "react"

export type PhoneHeaderProps = {
	titleNormal: string
	titleColored: string
	rightContent?: ReactNode
	leftContent?: ReactNode
}

export const PhoneHeader: React.FC<PhoneHeaderProps> = ({
	titleNormal,
	titleColored,
	rightContent,
	leftContent
}) => {
	return (
		<header className='flex items-center justify-between rounded-b-3xl bg-secondary-50 p-6 shadow-md lg:hidden'>
			<div className='h-10 w-10'>{rightContent}</div>
			<h1 className='text-center text-xs font-bold text-secondary'>
				<span>{titleNormal}</span> <span className='text-primary'>{titleColored}</span>
			</h1>
			<div className='h-10 w-10'>{leftContent}</div>
		</header>
	)
}
