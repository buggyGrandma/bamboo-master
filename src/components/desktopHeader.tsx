import Call from "~/lib/icons/call"
import { LogOutBtn } from "./LogOutBtn"
import { SignInBtn } from "./SignInBtn"
import { DesktopHeaderCartLink } from "./desktopHeaderCartLink"
import { DesktopHeaderCategory } from "./desktopHeaderCategory"
import { DesktopHeaderLink } from "./desktopHeaderLink"
import { SearchInput } from "./searchInput"

export const DesktopHeader: React.FC = () => {
	return (
		<header className='relative hidden bg-white px-[60px] [box-shadow:0px_2px_10px_0px_rgba(0,0,0,0.10)] lg:block'>
			<div className='flex items-center py-6'>
				<h1>بامبو</h1>
				<SearchInput className='me-8' />
				<DesktopHeaderCartLink count={0} />
				<div className='mx-8 h-6 w-[1px] bg-secondary-50'></div>
				{false ? <LogOutBtn username={"کاربر"} /> : <SignInBtn />}
			</div>
			<div className='h-[1px] w-full bg-secondary-50'></div>
			<nav className='pt-6'>
				<ul className='flex'>
					<DesktopHeaderCategory />
					<div className='ms-7 h-6 w-[1px] bg-secondary-50'></div>
					<DesktopHeaderLink href='/best-selling' text='فروش ویژه' />
					<DesktopHeaderLink href='/contact-us' text='تماس با ما' />
					<DesktopHeaderLink href='/about-us' text='درباره ما' />
					<li className='ms-auto pb-5'>
						<a
							href='02156700680'
							className='persian-number flex h-full items-center px-2 text-primary'
							dir='ltr'>
							<Call className='me-2' width={16} height={16} />
							<span className='h-5'>
								021-<span className='text-secondary'>56700680</span>
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
