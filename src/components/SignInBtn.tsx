"use client"
import Profile from "~/lib/icons/profile"

export const SignInBtn: React.FC = () => {
	return (
		<button className='flex items-center rounded-lg bg-transparent text-sm font-bold text-secondary'>
			<Profile />
			<span className='ms-4 h-4'>ورود / ثبت نام</span>
		</button>
	)
}
