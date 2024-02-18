import { FC, useState, useCallback } from "react"
import ReactSlider from "react-slider"
import DragHandle from "~/lib/icons/dragHandle"
import Minus from "~/lib/icons/minus"
import { cn, formatPrice } from "~/lib/utils"

type RangeSliderProps = {
	max: number
	className?: string
}

const RangeSlider: FC<RangeSliderProps> = ({ max, className }) => {
	const [values, setValues] = useState([0, max])

	const start = max - values[1]!
	const end = max - values[0]!

	const startPercent = 100 - (end / max) * 100
	const endPercent = 100 - (start / max) * 100

	const onChange = useCallback((value: number[]) => {
		setValues(value)
	}, [])

	return (
		<div className='px-4 py-6'>
			<h3 className='text-sm text-secondary'>قیمت محصول :</h3>
			<div className={cn(className)}>
				<div className='relative'>
					<ReactSlider
						className='h-8 w-full'
						defaultValue={values}
						onChange={onChange}
						max={max}
						step={10000}
						ariaLabelledby={["min-label", "max-label"]}
						ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
						renderThumb={(props, _state) => (
							<div
								{...props}
								className='cursor-pointer rounded-lg border border-secondary-50 bg-white p-1 text-secondary outline-none transition-shadow hover:shadow-lg active:shadow-md'>
								<DragHandle />
							</div>
						)}
					/>
					<div
						className={"absolute left-0 top-1/2 h-1 w-full -translate-y-1/2"}
						style={{
							background: `linear-gradient(90deg, #eceff1 0%, #eceff1 ${startPercent}%, #ff5722 ${startPercent}%, #ff5722 ${endPercent}%, #eceff1 ${endPercent}%, #eceff1 100%)`
						}}
					/>
				</div>
				<div className='persian-number mt-4 flex items-center gap-2'>
					<label
						id='min-label'
						className={cn(
							"flex h-8 w-full items-center justify-center rounded-lg border border-secondary-50 bg-white text-xs",
							start === 0 ? "text-secondary-400" : "text-primary"
						)}>
						{formatPrice(start)} تومان
					</label>
					<Minus className='h-6 min-w-[24px] text-secondary' />
					<label
						id='max-label'
						className={cn(
							"flex h-8 w-full items-center justify-center rounded-lg border border-secondary-50 bg-white text-xs",
							end === max ? "text-secondary-400" : "text-primary"
						)}>
						{formatPrice(end)} تومان
					</label>
				</div>
			</div>
		</div>
	)
}

export default RangeSlider
