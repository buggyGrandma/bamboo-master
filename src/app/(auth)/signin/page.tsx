"use client"
import { Switch } from "@headlessui/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import Link from "next/link"
import type { ChangeEventHandler, FormEventHandler } from "react"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import Cookies from "universal-cookie"
import { z } from "zod"
import CFilter from "~/app/(main)/search/components/CFilter"
import LFilters from "~/app/(main)/search/components/LFilter"
import { Filter } from "~/app/(main)/search/page"
import Input from "~/components/contactPage/input"
import Check from "~/lib/icons/check"
import type { Nullable } from "~/lib/typeHelpers"
import { cn } from "~/lib/utils"
import { AXIOS } from "../../../../axios.config"
import { OtpInput } from "./otpInput"
import { useRouter } from "next/navigation"

const otpResponseZod = z.object({
	expires: z.string().datetime()
})
export default function SignIn() {
	const [checked, setChecked] = useState(false)
	const [account, setAccount] = useState("")
	const [remainingTime, setRemainingTime] = useState(120)
	const [otpExpire, setOtpExpire] = useState<Nullable<Date>>(null)
	const [isAuth, setAuth] = useState(false)
	const [loading, setLoading] = useState(false)
	const [userName, setUserName] = useState("")
	const [petName, setPetName] = useState("")
	const [otp, setOtp] = useState("")
	const cookies = new Cookies(null, { path: "/" })
	const [filters, setFilter] = useState<Filter[]>([])
	const router = useRouter()
	type PetType = {
		petType: string
	}
	type TAccounting = {
		petType: string
		petBirthday: string
		userName: string
		petName: string
		account: string
	}
	const fetchPetType = () =>
		AXIOS.get<PetType[]>(`accounting/petTypes`).then((res) => {
			console.log(res.data)
			return res.data
		})
	const { data: petTypes } = useQuery({
		queryKey: ["petTypes"],
		queryFn: fetchPetType
	})

	const addPet = useMutation({
		mutationFn: async (pt: TAccounting) => {
			const { account, petBirthday, petName, userName, petType } = pt
			const config = {
				headers: {
					token: cookies.get("token")
				}
			}
			const requestBody = {
				account,
				petBirthday,
				userName,
				petName,
				petType
			}
			const res = await axios.post(
				"http://185.19.201.5:1000/accounting/signup",
				requestBody,
				config
			)
			res.data === "ok" ? (router.push("/"), toast.success(res.data)) : toast.error(res.data)
			return res.data
		}
	})
	const handleSubmitPet: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		const result = addPet.mutate({
			petBirthday: "1200",
			petName,
			petType: filters[0]?.name ? filters[0].name : "",
			userName,
			account: cookies.get("account")
		})
	}
	useEffect(() => {
		if (otpExpire === null) {
			return
		}

		// const interval = setInterval(() => {
		// 	console.log(remainingTime)
		// 	if (remainingTime <= 0) {
		// 		clearInterval(interval)
		// 		return
		// 	}
		// 	setRemainingTime(remainingTime - 1)
		// }, 1000)

		// return () => {
		// 	clearInterval(interval)
		// }
	}, [otpExpire])
	//if (otpExpire) console.log(new Date(otpExpire.getTime() - Date.now()))

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	const onAccountFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
		try {
			e.preventDefault()
			setLoading(true)
			const formData = new FormData(e.currentTarget)
			const response = await AXIOS.post("authentication/sendOTP", {
				account: formData.get("username")
			}).then((res) => res.data)

			if (response.status !== "ok") {
				setLoading(false)
				return
			}
			cookies.set("account", formData.get("username"))
			setOtpExpire(new Date(response.expire))
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}, [])

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	const onOtpFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
		async (e) => {
			try {
				e.preventDefault()
				setLoading(true)
				const response = await AXIOS.put("authentication/verifyOTP", {
					account: account,
					otp: otp
				}).then((res) => res.data)
				if (response.token !== "wrong") {
					setLoading(false)
					setAuth(true)
					cookies.set("token", response.token)
					toast.success("وارد شدید.")
				} else {
					toast.error("خطا در ارتباط با سرور.")
				}
				setLoading(false)
			} catch (error) {
				toast.error("خطا در ارتباط با سرور.")
				setLoading(false)
			}
		},
		[account, checked, otp]
	)

	const onAcountChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
		setAccount(e.target.value.trim())
	}, [])

	if (otpExpire === null) {
		return (
			<form onSubmit={onAccountFormSubmit}>
				{/* <div className='text-center text-sm text-primary md:hidden'>به پت شاپ ما خوش آمدید</div>
			<div className='mt-2 text-center text-xs text-[#575757] md:hidden'>
				برای ورود یا ثبت نام لطفا شماره موبایل خود را وارد کرده و سپس دکمه مرحله بعد را بزنید.
			</div> */}
				<div className='flex w-full items-center justify-center md:justify-between'>
					<h1 className='text-base font-extrabold text-secondary'>ورود / ثبت نام</h1>
					<div className='hidden md:block'>بامبو</div>
				</div>
				<div className='mt-8 flex flex-col items-start md:mt-6'>
					<label htmlFor='username' className='text-xs text-secondary'>
						شماره موبایل یا ایمیل <span className='text-primary'>*</span>
					</label>
					<input
						type='text'
						name='username'
						id='username'
						value={account}
						onChange={(e) => onAcountChange(e)}
						placeholder='شماره موبایل یا ایمیل'
						className={cn(
							"mt-2 h-12 self-stretch rounded-lg border border-secondary-50 pr-6 text-right text-primary outline-none placeholder:text-secondary-400 focus:border-primary",
							account.length > 0 && "border-primary"
						)}
						dir='ltr'
					/>
				</div>
				<div className='mt-8 flex items-center md:mt-6'>
					<Switch
						name='eula'
						checked={checked}
						onChange={setChecked}
						className={cn(
							"grid h-4 w-4 place-items-center rounded-[5px] border border-secondary-50 text-white hover:border-primary",
							checked && "border-primary bg-primary"
						)}>
						<span className='sr-only'>accept eula</span>
						<Check />
					</Switch>
					<div className='ms-2 text-xs text-secondary'>
						تایید{" "}
						<Link href='/eula' className='text-secondary-400'>
							شرایط پت شاپ
						</Link>{" "}
						و{" "}
						<Link href='/privacy-policy' className='text-secondary-400'>
							قوانین حریم خصوصی
						</Link>
					</div>
				</div>
				<button
					type='submit'
					className='mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-fa transition-[filter] disabled:grayscale md:mt-6'
					disabled={loading || !checked || account.length < 5}
					aria-disabled={loading || !checked || account.length < 5}>
					مرحله بعد
				</button>
				{/* <div className='relative mt-8 flex justify-center text-xs text-secondary-500 before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:-translate-y-1/2 before:bg-secondary-100 md:mt-6'>
					<span className='z-10 bg-white px-4'>ثبت نام با گوگل</span>
				</div>
				<button
					type='button'
					className='mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-secondary-50 text-xs font-bold text-secondary md:mt-6'
					onClick={() =>
						void signIn("credentials", { username: "mohammad", password: "test" })
					}>
					<Google className='me-4' />
					ثبت نام با گوگل
				</button> */}
			</form>
		)
	}
	if (isAuth) {
		return (
			<form onSubmit={handleSubmitPet}>
				<div className='flex w-full items-center justify-center md:justify-between'>
					<h1 className='text-base font-extrabold text-secondary'>اطلاعات خود را وارد کنید</h1>
					<div className='hidden md:block'>بامبو</div>
				</div>
				<div className='mt-8 flex flex-col items-start gap-12 md:mt-6'>
					<Input
						OnChange={setUserName}
						label='نام و نام خانوادگی'
						placeholder='نام و نام خانوادگی خود را وارد کنید .'
					/>
					<div className='relative mb-8 w-full'>
						<Input label='نوع حیوان خانگی' placeholder='' />
						<div className='absolute left-10 top-4 z-10'>
							{petTypes && (
								<CFilter
									type=''
									currents={filters}
									onChange={setFilter}
									title=''
									options={
										// 	[
										// 	[types[0]?.petType}`],
										// 	[`${data[1]?.petType}`],
										// 	[`${data[2]?.petType}`]
										// ]
										petTypes.map((item) => [item.petType])
									}
								/>
							)}
						</div>
						<div className='absolute top-5 flex w-full justify-center'>
							<LFilters currents={filters} setCurrenrs={setFilter} />
						</div>
					</div>
					{filters &&
						filters.map((filter) => (
							<Input
								OnChange={setPetName}
								key={filter.name}
								label={`نام ${filter.name} شما`}
								placeholder=' اسم حیوان خانگی خود را وارد کنید .'
							/>
						))}
				</div>

				<button
					type='submit'
					className='mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-fa transition-[filter] disabled:grayscale md:mt-6'>
					ثبت اطلاعات و ورود
				</button>
			</form>
		)
	}
	return (
		<form onSubmit={onOtpFormSubmit}>
			<div className='flex items-center justify-between'>
				<h1 className='text-base font-extrabold text-secondary'>کد تایید را وارد کنید</h1>
				<div className='hidden md:block'>بامبو</div>
			</div>
			<div className='mt-8 text-xs text-secondary md:mt-14 md:text-sm'>
				کد تایید برای {account} ارسال شد.
			</div>
			<OtpInput value={otp} setValue={setOtp} loading={loading} />
			<div className='mt-10 text-center text-sm text-secondary-400'>
				{remainingTime} ثانیه مانده تا دریافت مجدد کد
			</div>
			<button
				type='submit'
				className='mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-fa transition-[filter] disabled:grayscale md:mt-6'
				disabled={loading || otp.length < 4}
				aria-disabled={loading || otp.length < 4}>
				تایید
			</button>
		</form>
	)
}
