import type { FC } from "react"

export const InfoSection: FC = () => {
	return (
		<section className='mt-32 grid grid-cols-1 gap-y-16 border-t border-secondary-50 px-[60px] py-16 sm:grid-cols-2 lg:grid-cols-4'>
			<div className='flex flex-col items-center'>
				<div className='persian-number text-5xl font-extrabold text-primary' dir='ltr'>
					+4
				</div>
				<div className='mt-2 text-lg font-bold text-secondary'>سال حضور در مارکت</div>
			</div>
			<div className='flex flex-col items-center'>
				<div className='persian-number text-5xl font-extrabold text-primary' dir='ltr'>
					+1437
				</div>
				<div className='mt-2 text-lg font-bold text-secondary'>مشتری از سراسر ایران</div>
			</div>
			<div className='flex flex-col items-center'>
				<div className='persian-number text-5xl font-extrabold text-primary' dir='ltr'>
					+1755
				</div>
				<div className='mt-2 text-lg font-bold text-secondary'>محصولات به فروش رسیده</div>
			</div>
			<div className='flex flex-col items-center'>
				<div className='persian-number text-5xl font-extrabold text-primary' dir='ltr'>
					+51
				</div>
				<div className='mt-2 text-lg font-bold text-secondary'>مطالب وبلاگ</div>
			</div>
		</section>
	)
}
