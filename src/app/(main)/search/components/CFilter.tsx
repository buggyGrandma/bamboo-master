"use client"
import { Disclosure, Switch } from "@headlessui/react"
import { useEffect } from "react"
import { SearchInput } from "~/components/searchInput"
import Arrow from "~/lib/icons/arrow"
import Check from "~/lib/icons/check"
import { Filter } from "../page"

interface Props {
	title: string
	options: string[][]
	search?: boolean
	searchPlaceHilder?: string
	onChange: (event: any) => void
	currents: Filter[]
	type: string
}

const CFilter = ({
	title,
	options,
	search = false,
	searchPlaceHilder = "جستجو...",
	onChange,
	currents,
	type
}: Props) => {
	useEffect(() => onChange(currents), [currents])
	return (
		<div className='px-4 py-6'>
			<Disclosure>
				<Disclosure.Button className='flex h-8 w-full items-center justify-between text-sm text-secondary'>
					<h3>{title}</h3>
					<Arrow direction='down' variant='2' className='transition-all ui-open:rotate-180' />
				</Disclosure.Button>
				<Disclosure.Panel className='mt-4'>
					<Switch.Group>
						{search && (
							<div className='mb-4 flex items-center'>
								<SearchInput
									className='ms-0 mt-6 max-w-none'
									placeholder={searchPlaceHilder}
								/>
							</div>
						)}
						{options.map((option, i) => {
							return (
								<div key={i} className='flex items-center'>
									<Switch
										checked={
											option[0]
												? currents.filter((e) => e.name === option[0]).length > 0
												: false
										}
										onChange={(e) => {
											e && option[0]
												? onChange([...currents, { name: option[0], type: type }])
												: onChange(currents.filter((item) => item.name !== option[0]))
										}}
										name={type}
										className='grid h-4 w-4 place-items-center rounded-[5px] border border-secondary text-white hover:border-primary ui-checked:border-primary ui-checked:bg-primary'>
										<Check className='mr-px' />
									</Switch>
									<Switch.Label
										htmlFor={type}
										className='ms-2 flex flex-grow items-center justify-between'>
										<div className='text-sm text-secondary'>{option[0]}</div>
										{option[1] && (
											<div className='text-sm text-secondary-400'>{option[1]}</div>
										)}
									</Switch.Label>
								</div>
							)
						})}
					</Switch.Group>
				</Disclosure.Panel>
			</Disclosure>
		</div>
	)
}

export default CFilter
