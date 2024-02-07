import Link from "next/link"
import Buy from "~/lib/icons/buy"

export const DesktopHeaderCartLink: React.FC<{ count: number }> = ({ count }) => (
	<Link
		href='/checkout/cart/'
		className='persian-number ms-auto flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white'>
		<Buy />
		{count > 0 && <span className='ms-4 h-4'>{count}</span>}
	</Link>
)
