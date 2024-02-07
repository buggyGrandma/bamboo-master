import Image from "next/image"
import Link from "next/link"
import { SearchTag } from "~/components/blogPage/searchTag"
import { PhoneHeader } from "~/components/phoneHeader"
import { SearchInput } from "~/components/searchInput"
import { cn } from "~/lib/utils"

type BlogPageProps = {
	searchParams: {
		query?: string
		category?: string
		page?: string
	}
}

export const metadata = {
	title: "علت نفس نفس زدن سگ چیست؟"
}

export default function BlogPage(props: BlogPageProps) {
	return (
		<div className='bg-white pb-28 lg:bg-fa'>
			<PhoneHeader titleNormal='وبلاگ' titleColored='پت شاپ' />
			<div className='container mt-8 lg:mt-10'>
				<nav className='' aria-label='breadcrumb'>
					<ol className='flex items-center gap-2 text-sm text-secondary'>
						<li className='text-primary'>
							<Link href='/'>خانه</Link>
						</li>
						/
						<li className=''>
							<Link href='/blog'>وبلاگ پت شاپ</Link>
						</li>
						/
						<li className='pointer-events-none touch-none select-none' aria-current='page'>
							<Link href='/blog/slug'>علت نفس نفس زدن سگ چیست؟</Link>
						</li>
					</ol>
				</nav>
				<div className='mt-6 flex flex-col gap-6 lg:flex-row lg:items-start'>
					<section className='grow border-secondary-50 bg-white lg:rounded-2xl lg:border lg:p-8'>
						<Image
							src='/about-us.jpeg'
							alt=''
							height={800}
							width={500}
							className='h-auto w-full rounded-2xl object-cover'
						/>
						<div className='mt-6 flex flex-col gap-4 md:flex-col-reverse lg:flex-col xl:flex-col-reverse'>
							<div className='flex items-center text-xs font-medium text-secondary md:text-sm lg:text-xs xl:text-sm'>
								<Image
									src='/about-us.jpeg'
									alt=''
									height={40}
									width={40}
									className='h-8 w-8 rounded-full object-cover md:h-10 md:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10'
								/>
								<div className='ms-2 xl:ms-4'>محمد رضا شریفی</div>
								<div className='ms-auto'>
									<span dir='ltr'>۱۳۹۸/۱۰/۲۱ - ۱۲:۵۰</span>
								</div>
							</div>
							<div className='flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between lg:flex-col-reverse lg:items-start xl:flex-row xl:items-center xl:justify-between'>
								<h2 className='text-lg font-bold text-secondary md:text-xl lg:text-lg xl:text-2xl'>
									علت نفس نفس زدن سگ چیست؟
								</h2>
								<div className='rounded-full border border-primary px-6 py-2 text-xs text-primary'>
									دانستنی های سگ
								</div>
							</div>
						</div>
						<div
							className={cn(
								"mt-5 text-secondary",
								"[&>*:not(:first-child)]:mt-3",
								"[&>h3:not(:first-child)]:mt-5 [&>h3]:text-lg [&>h3]:font-medium",
								"[&>h4:not(:first-child)]:mt-4 [&>h4]:font-medium",
								"[&>ol]:list-inside [&>ol]:list-decimal [&>ul]:list-inside [&>ul]:list-disc",
								"[&>p]:text-sm [&>p]:font-[325] [&>p]:leading-loose"
							)}>
							<p>
								وجود شپش در سگ‌‌تان می‌تواند بسیار ناخوشایند و آزار‌دهنده باشند، شپش‌ها
								انگل‌های کوچکی هستند که به موهای سگ چسبیده و از خون آنها تغذیه می‌کنند.
								شپش‌ها می‌توانند با تخم‌گذاری به سرعت در تمام بدن تکثیر شده و باعث ناراحتی و
								بروز خارش و التهاب شدید در بدن حیوان خانگی شما شوند. همچنین می‌توانند مشکلات
								جدی‌تری را برای سلامت جسمانی سگ‌تان ایجاد کنند، بنابراین مهم است که شما در
								مورد نحوه شناسایی شپش‌ها و چگونگی از بین بردن ‌آن‌ها اطلاعات کافی
								داشته‌باشید.توه به بهداشت سگ مانند توجه به انتخاب غذای سگ بسیار مهم است. در
								این مقاله به بررسی علائم وجود شپش در سگ‌ها و راه‌های درمان آن و همچنین توصیه
								هایی در مورد نحوه جلوگیری از ابتلای سگ‌ها به این انگل کوچک و آزار دهنده
								ارائه می‌دهیم:
							</p>
							<h3>انواع شپش در سگ‌ها</h3>
							<p>
								شپش‌ها با چسبیدن به ساقه‌ موی حیوانات و تغذیه از طریق خوردن پوست مرده و
								همچنین مکیدن خون به حیات خود ادامه می‌دهند و اگر از حیوان میزبان خود جدا
								شوند بیشتر از چند روز زنده نخواهند ماند. معمولا سگ‌هایی که در محیط‌های
								نامناسب و غیربهداشتی نگهداری می‌شوند بیشتر در معرض ابتلا به شپش قرار دارند،
								همچنین در حیواناتی که سن بالا و سیستم ایمنی ضعیفی دارند احتمال ابتلای بیشتری
								به این انگل آزار دهنده خواهند داشت. شما با داشتن آگاهی کامل در خصوص انواع
								شپش‌هایی که می‌تواند سگ‌ها را آلوده کند می‌توانید آن‌ها به سرعت تشخیص داده و
								اقدامات بهداشتی لازم را انجام دهید، که در ادامه به بررسی آن می‌پردازیم
							</p>
							<ul>
								<li>یک</li>
								<li>دو</li>
								<li>سه</li>
							</ul>
							<ol>
								<li>یک</li>
								<li>دو</li>
								<li>سه</li>
							</ol>
						</div>
						<h3 className='mt-11 text-lg font-bold text-secondary md:text-xl lg:text-lg xl:text-2xl'>
							برچسب ها:
						</h3>
						<ul className='mt-6 flex flex-wrap gap-2'>
							<SearchTag text='بر چسب شماره یک' selected />
							<SearchTag text='بر چسب شماره دو' />
							<SearchTag text='بر چسب سه' />
							<SearchTag text='بر چسب چهارم' />
						</ul>
					</section>
					<div className='hidden lg:block'>
						<section className='w-[425px] max-w-[30vw] rounded-2xl bg-white lg:border lg:border-secondary-50 lg:px-8 lg:py-12'>
							<h3 className='text-sm text-secondary-500'>جستجو در وبلاگ</h3>
							<SearchInput
								className='ms-0 mt-6 max-w-none'
								placeholder='موضوع خود را جستجو کنید'
							/>
							<h3 className='mt-8 text-sm text-secondary-500'>برچسب‌های وبلاگ</h3>
							<ul className='mt-6 flex flex-wrap gap-x-2 gap-y-4'>
								<SearchTag text='بر چسب شماره یک' selected />
								<SearchTag text='بر چسب شماره دو' />
								<SearchTag text='بر چسب سه' />
								<SearchTag text='بر چسب چهارم' />
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}
