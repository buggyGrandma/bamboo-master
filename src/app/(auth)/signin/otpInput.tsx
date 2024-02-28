import type {
	ChangeEventHandler,
	Dispatch,
	KeyboardEventHandler,
	MouseEventHandler,
	SetStateAction
} from "react"
import { useCallback, useRef } from "react"
import { pa2e } from "~/lib/digitConverter"
import { cn } from "~/lib/utils"

export function OtpInput({
	value,
	setValue,
	loading
}: {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	loading: boolean
}) {
	const inputRef = useRef<HTMLInputElement>(null)

	const onInputContainerClick: MouseEventHandler<HTMLDivElement> = useCallback(() => {
		if (loading) {
			return
		}
		if (value.length === 4) {
			setValue("")
			setTimeout(() => {
				inputRef.current?.focus()
			}, 50)
		}
		inputRef.current?.focus()
	}, [loading, setValue, value.length])

	const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			const value = pa2e(e.currentTarget.value.replace(/[^\d]/g, ""))
			setValue((prev) => `${prev}${value}`.slice(0, 4))
		},
		[setValue]
	)

	const onKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			if (e.key === "Backspace" && value.length > 0) {
				setValue((prev) => prev.slice(0, -1))
			}
		},
		[setValue, value.length]
	)

	return (
		<div
			className='mt-8 grid h-14 grid-flow-row-dense grid-cols-4 grid-rows-1 gap-2 overflow-hidden'
			dir='ltr'
			onClick={onInputContainerClick}>
			{new Array(4).fill("").map((_, i) => (
				<div
					key={i}
					className={cn(
						"persian-number row-start-1 row-end-2 grid h-full place-items-center rounded-lg border border-secondary-100",
						i === 0 && "col-start-1 col-end-2",
						i === 1 && "col-start-2 col-end-3",
						i === 2 && "col-start-3 col-end-4",
						i === 3 && "col-start-4 col-end-5"
						//i === 4 && "col-start-5 col-end-6",
						//i === 5 && "col-start-6 col-end-7"
					)}>
					{value[i]}
				</div>
			))}
			<input
				ref={inputRef}
				type='text'
				name='otp'
				id='otp'
				value=''
				onChange={onChange}
				onKeyDown={onKeyDown}
				inputMode='decimal'
				autoComplete='one-time-code'
				autoFocus
				className={cn(
					"persian-number col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg border border-secondary-100 text-center outline-none focus:border-2 focus:border-primary",
					value.length === 0 && "col-start-1 col-end-2",
					value.length === 1 && "col-start-2 col-end-3",
					value.length === 2 && "col-start-3 col-end-4",
					value.length === 3 && "col-start-4 col-end-5",
					value.length === 4 && "hidden"
					//value.length === 5 && "col-start-6 col-end-7",
					//value.length === 6 && "hidden"
				)}
			/>
		</div>
	)
}
