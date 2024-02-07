import Image from "next/image"
import { PhoneHeader } from "~/components/phoneHeader"
import Work from "~/lib/icons/work"
import aboutUsImage from "~public/about-us.jpeg"
import fishBowlImage from "~public/fish-bowl-amico.png"
import messengerImage from "~public/messenger-amico.png"
import mobileMarketingImage from "~public/mobile-marketing-bro.png"

export default function AboutUsPage() {
	return (
		<div className='bg-white lg:bg-fa'>
			<PhoneHeader titleNormal='درباره' titleColored='ما' />
			<div className='2xl:px-auto mx-auto my-10 max-w-screen-2xl px-6 lg:mb-16'>
				<h1 className='ms-3.5 hidden text-sm text-secondary lg:block'>
					درباره <span className='text-primary'>ما</span>
				</h1>
				<div className='flex flex-col gap-8 lg:mt-2 lg:flex-row lg:rounded-2xl lg:border lg:border-secondary-50 lg:bg-white lg:px-16 lg:py-16'>
					<div className=''>
						<Image src={aboutUsImage} alt='us' className='rounded-2xl object-contain' />
					</div>
					<div className='mx-8 my-auto hidden h-64 w-px bg-secondary-50 lg:block' />
					<div className='lg:my-auto'>
						<div className='flex flex-col items-center gap-8 lg:items-start'>
							<div className='text-2xl font-black text-primary'>بامبو</div>
							<div className='text-lg font-bold text-primary lg:hidden'>درباره پت شاپ</div>
							<p className='text-center text-sm text-secondary lg:text-start'>
								شما می‌تونید انواع محصولات برندهایی مث از سال ۱۳۹۸، پتیشا فعالیتش رو آغاز
								کرد و مخاطبین زیادی رو توانست با خودش همراه کنه‌ علت این موضوع تنوع بالای
								محصولات و قیمت منصفانه و حداقلی هست که برای محصولات درنظر گرفته شده. راستی
								شما ساکن تهران یا هر کدوم از شهرهای ایران که باشید می‌تونید از پتیشا خرید
								کنید و به سرعت کالاهای مدنظرتون رو درب منزل دریافت نمایید.
							</p>
							<p className='text-center text-sm text-secondary lg:text-start'>
								شما می‌تونید انواع محصولات برندهایی مثل رویال کنین ، جسرا و فیدار رو از پت
								شاپ آنلاین پتیشا بدون دردسر خریداری کنید. پس از این به بعد نگران خریدی آسان
								و راحت برای پت های زیباتون نباشید. پتیشا فکر همه چیز رو کرده.
							</p>
							<div className='hidden items-center gap-2 text-sm font-bold text-secondary lg:flex'>
								<Work />
								هفت روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-8 lg:mt-2 lg:flex-row lg:rounded-2xl lg:border lg:border-secondary-50 lg:bg-white lg:px-16 lg:py-16'>
					<div className=''>
						<Image src={fishBowlImage} alt='همیشه کنار هم' />
						<div className=''>همیشه کنار هم</div>
						<p className=''>
							پت شاپ اینترنتی تام و جری با ارائه توضیحات به صورت آنلاین و جامع درباره محصول و
							بررسی درصد مواد تشکیل دهنده و... امکان آشنایی با محصول و مقایسه برند های
							گوناگون را برای شما فراهم کرده است.
						</p>
					</div>
					<div className=''>
						<Image src={messengerImage} alt='ارسال سریع' />
						<div className=''>ارسال سریع</div>
						<p className=''>
							پت شاپ اینترنتی تام و جری با ارائه توضیحات به صورت آنلاین و جامع درباره محصول و
							بررسی درصد مواد تشکیل دهنده و... امکان آشنایی با محصول و مقایسه برند های
							گوناگون را برای شما فراهم کرده است.
						</p>
					</div>
					<div className=''>
						<Image src={mobileMarketingImage} alt='کیفیت بالا و قیمت مناسب' />
						<div className=''>کیفیت بالا و قیمت مناسب</div>
						<p className=''>
							پت شاپ اینترنتی تام و جری با ارائه توضیحات به صورت آنلاین و جامع درباره محصول و
							بررسی درصد مواد تشکیل دهنده و... امکان آشنایی با محصول و مقایسه برند های
							گوناگون را برای شما فراهم کرده است.
						</p>
					</div>
					<div className=''>
						<Image src={fishBowlImage} alt='ثبت سفارش' />
						<div className=''>ثبت سفارش</div>
						<p className=''>
							پت شاپ اینترنتی تام و جری با ارائه توضیحات به صورت آنلاین و جامع درباره محصول و
							بررسی درصد مواد تشکیل دهنده و... امکان آشنایی با محصول و مقایسه برند های
							گوناگون را برای شما فراهم کرده است.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
