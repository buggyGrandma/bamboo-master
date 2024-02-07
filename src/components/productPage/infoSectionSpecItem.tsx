import Link from "next/link"
import { type FC } from "react"
import { cn } from "~/lib/utils"

export type InfoSectionTabLinkProps = {
	title: string
	value: string
}

export const InfoSectionSpecItem: FC<InfoSectionTabLinkProps> = ({ title, value }) => {
	return (
		<li className='grid grid-cols-2 gap-2 rounded-lg bg-white p-4 text-sm'>
			<div className='text-secondary'>{title}</div>
			<div className='font-bold text-secondary-600'>{value}</div>
		</li>
	)
}
