import Link from "next/link"
import Facebook from "~/lib/icons/facebook"
import Instagram from "~/lib/icons/instagram"
import Telegram from "~/lib/icons/telegram"
import Whatsapp from "~/lib/icons/whatsapp"

export const Footer: React.FC = () => {
	return (
		<footer className='bg-fa hidden border-t border-secondary-50 px-[60px] lg:block'>
			<div className='flex py-16'>
				<div className='me-4 max-w-3xl'>
					<div className=''>بامبو</div>
					<p className='mt-8 text-sm text-secondary'>
						از سال ۱۳۹۸، پتیشا فعالیتش رو آغاز کرد و مخاطبین زیادی رو توانست با خودش همراه
						کنه‌ علت این موضوع تنوع بالای محصولات و قیمت منصفانه و حداقلی هست که برای محصولات
						درنظر گرفته شده. راستی شما ساکن تهران یا هر کدوم از شهرهای ایران که باشید می‌تونید
						از پتیشا خرید کنید و به سرعت کالاهای مدنظرتون رو درب منزل دریافت نمایید.
					</p>
					<div className='mt-8 flex text-sm font-bold text-primary underline underline-offset-[6px]'>
						<Link href='/' className='me-8'>
							درباره ما
						</Link>
						<Link href='/' className='me-8'>
							تماس با ما
						</Link>
						<Link href='/' className='me-8'>
							گارانتی‌های ما
						</Link>
						<Link href='/' className='me-8'>
							شرایط و ضوابط
						</Link>
						<Link href='/' className='me-8'>
							سیاست حفظ حریم خصوصی
						</Link>
					</div>
				</div>
				<div className='ms-auto flex flex-col items-center'>
					<div className='flex items-center'>
						<div className=''>eNAMAD</div>
						<div className='ms-8'>samandehi</div>
					</div>
					<div className='mt-auto flex items-center text-secondary'>
						<a href='https://instagram/bamboo' target='_blank' title='instagram'>
							<Instagram />
						</a>
						<div className='mx-4 h-2 w-1 rounded-full bg-secondary-50'></div>
						<a href='tg://resolve?domain=Hamyarzabansupport' title='telegram'>
							<Telegram />
						</a>
						<div className='mx-4 h-2 w-1 rounded-full bg-secondary-50'></div>
						<a href='tg://resolve?domain=Hamyarzabansupport' title='whatsapp'>
							<Whatsapp />
						</a>
						<div className='mx-4 h-2 w-1 rounded-full bg-secondary-50'></div>
						<a href='tg://resolve?domain=Hamyarzabansupport' title='facebook'>
							<Facebook />
						</a>
					</div>
				</div>
			</div>
			<div className='h-[1px] w-full bg-secondary-50'></div>
			<nav className='py-6 text-center text-sm font-light text-secondary'>
				حق چاپ | © 2023 ساخته شده توسط RoyaBiz.
			</nav>
		</footer>
	)
}
