import React from "react"
import { Filter } from "../page"

interface Props {
	currents: Filter[]
	setCurrenrs: (event: any) => void
}
const SelectedFilters = ({ currents, setCurrenrs }: Props) => {
	return (
		<div className='px-4 py-6'>
			<div className='flex items-center justify-between'>
				<h3 className='text-sm text-secondary'>فیلتر ها :</h3>
				<button
					onClick={() => setCurrenrs([])}
					type='button'
					className='text-xs text-secondary-400 underline underline-offset-4'>
					پاک کردن همه
				</button>
			</div>
			<ul className='mt-8 flex flex-wrap gap-2'>
				{currents.map((filter) => {
					return (
						<li key={filter.name}>
							<button
								onClick={() => setCurrenrs(currents.filter((item) => item !== filter))}
								type='button'
								className='flex h-6 items-center gap-2 rounded-lg bg-primary px-2 text-xs text-white'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='6'
									height='6'
									viewBox='0 0 6 6'
									fill='none'>
									<path
										d='M5.154 0L3 2.154L0.846 0L0 0.846L2.154 3L0 5.154L0.846 6L3 3.846L5.154 6L6 5.154L3.846 3L6 0.846L5.154 0Z'
										fill='white'
									/>
								</svg>
								<div className=''>{filter.name}</div>
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default SelectedFilters
