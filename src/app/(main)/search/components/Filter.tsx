import { Disclosure, Switch } from "@headlessui/react"
import React from "react"
import Arrow from "~/lib/icons/arrow"
import Check from "~/lib/icons/check"
interface Props {
	title: string
	options: string[][]
}

const Filter = ({ title, options }: Props) => {
	return (
		<div className='px-4 py-6'>
			<Disclosure>
				<Disclosure.Button className='flex h-8 w-full items-center justify-between text-sm text-secondary'>
					<h3>{title}</h3>
					<Arrow direction='down' variant='2' className='transition-all ui-open:rotate-180' />
				</Disclosure.Button>
				<Disclosure.Panel className='mt-4'>
					<Switch.Group>
						{options.map((option) => {
							return (
								<div className='flex items-center'>
									<Switch
										name='brand'
										className='grid h-4 w-4 place-items-center rounded-[5px] border border-secondary text-white hover:border-primary ui-checked:border-primary ui-checked:bg-primary'>
										<Check className='mr-px' />
									</Switch>
									<Switch.Label className='ms-2 flex flex-grow items-center justify-between'>
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

export default Filter
