export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-col bg-primary md:grid md:place-items-center md:bg-white'>
			<main className='rounded-b-[32px] border border-secondary-50 bg-white p-6 md:w-[538px] md:rounded-2xl md:px-8 md:py-16 md:shadow-xl'>
				{children}
			</main>
			<div className='m-auto text-white md:hidden'>بامبو</div>
		</div>
	)
}
