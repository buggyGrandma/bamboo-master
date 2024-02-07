import { DesktopHeader } from "~/components/desktopHeader"
import { Footer } from "~/components/footer"
import { PhoneBottomNav } from "~/components/phoneBottomNav"
import "~/styles/globals.css"

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<DesktopHeader />
			<main>{children}</main>
			<PhoneBottomNav />
			<Footer />
		</>
	)
}
