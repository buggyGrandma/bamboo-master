"use client"
import { Disclosure, RadioGroup } from "@headlessui/react"
import React, { useState } from "react"
import Arrow from "~/lib/icons/arrow"
import { cn } from "~/lib/utils"

interface Props {
	title: string
	options: string[]
	currents: string[]
	onChange: (item: any) => void
}
const RFilter = ({ title, options, currents, onChange }: Props) => {
	const [value, setValue] = useState<number>(0)
	return (
		<div className='px-4 py-6'>
			<Disclosure>
				<Disclosure.Button className='flex h-8 w-full items-center justify-between text-sm text-secondary'>
					<h3>{title}</h3>
					<Arrow direction='down' variant='2' className='transition-all ui-open:rotate-180' />
				</Disclosure.Button>
				<Disclosure.Panel className='mt-4'>
					<RadioGroup
						name='age'
						value={value}
						onChange={(e) => {
							setValue(e),
								onChange([...currents.filter((item) => !options.includes(item)), e])
						}}
						className='flex flex-col gap-2'>
						{options.map((age, i) => (
							<RadioGroup.Option
								key={i}
								value={age}
								className='group flex cursor-pointer items-center gap-3 text-sm'>
								<div
									className={cn(
										"relative h-4 w-4 rounded-full border border-secondary",
										"before:[content=''] before:absolute before:left-1/2 before:top-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full",
										"group-hover:border-primary",
										"ui-checked:border-primary ui-checked:before:bg-primary"
									)}
								/>
								{age}
							</RadioGroup.Option>
						))}
					</RadioGroup>
				</Disclosure.Panel>
			</Disclosure>
		</div>
	)
}

export default RFilter
