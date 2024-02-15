import Image from "next/image"
import React from "react"
import { PhoneHeader } from "~/components/phoneHeader"
import Call from "~/lib/icons/call"
import Facebook from "~/lib/icons/facebook"
import Instagram from "~/lib/icons/instagram"
import Location from "~/lib/icons/location"
import Mail from "~/lib/icons/mail"
import Telegram from "~/lib/icons/telegram"
import Whatsapp from "~/lib/icons/whatsapp"
import Work from "~/lib/icons/work"

const Contact = () => {
	return (
		<div className='bg-white lg:bg-fa'>
			<PhoneHeader titleNormal='تماس ' titleColored='با ما' />
			<div className='2xl:px-auto mx-auto my-10 max-w-screen-2xl px-6 lg:mb-16'>
				<h1 className='ms-3.5 hidden text-sm text-secondary lg:block'>
					تماس <span className='text-primary'>با ما</span>
				</h1>
				<div className='flex flex-col gap-8 lg:mt-2 lg:flex-row lg:rounded-2xl lg:border lg:border-secondary-50 lg:bg-white lg:px-16 lg:py-16'>
					<div className='h-[585px] w-[483px]'>
						<div className='mx-auto h-[325px] w-[441px] bg-orange-600'></div>
						<div className='my-4 flex flex-col gap-4'>
							<div className='hidden items-center gap-2 text-sm  text-secondary lg:flex'>
								<Call />
								شماره تلفن ثابت : ۴۳۰۰۰۳۰۰-۰۲۱
							</div>
							<div className='hidden items-center gap-2 text-sm  text-secondary lg:flex'>
								<Mail />
								آدرس ایمیل : Suported@petshop.ir
							</div>
							<div className='hidden items-center gap-2 text-sm  text-secondary lg:flex'>
								<Location />
								آدرس : تهران، سعادت‌آباد، خیابان فرهنگ، کوچه پیوند ۲، پلاک ۸، طبقه سوم
							</div>
							<div className='hidden items-center gap-2 text-sm  text-secondary lg:flex'>
								<Work />
								ساعت کاری : ۹ صبح – ۹ شب
							</div>
							<div className='my-3 hidden h-px w-full bg-secondary-50 lg:block' />
							<p className='text-sm  text-secondary'>شبکه های اجتماعی : </p>
							<div className='flex items-center gap-4'>
								<div className='flex items-center gap-2 text-secondary'>
									<Instagram />
									<p className='text-sm font-medium text-primary'>اینستاگرام</p>
								</div>
								<div className='h-2 w-1 rounded-full bg-secondary-50' />
								<div className='flex items-center gap-2 text-secondary'>
									<Telegram />
									<p className='text-sm font-medium text-primary'>تلگرام</p>
								</div>
								<div className='h-2 w-1 rounded-full bg-secondary-50' />
								<div className='flex items-center gap-2 text-secondary'>
									<Whatsapp />
									<p className='text-sm font-medium text-primary'>واتس‌اپ</p>
								</div>
								<div className='h-2 w-1 rounded-full bg-secondary-50' />
								<div className='flex items-center gap-2 text-secondary'>
									<Facebook />
									<p className='text-sm font-medium text-primary'>فیسبوک</p>
								</div>
							</div>
						</div>
					</div>
					<div className='mx-8  hidden  w-px bg-secondary-50 lg:block' />
					<div className='w-full'></div>
				</div>
			</div>
		</div>
	)
}

export default Contact
