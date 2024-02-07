import Down1 from "./down1"
import Down2 from "./down2"
import Down3 from "./down3"
import DownCircle from "./downCircle"
import DownSquare from "./downSquare"
import Left1 from "./left1"
import Left2 from "./left2"
import Left3 from "./left3"
import LeftCircle from "./leftCircle"
import LeftSquare from "./leftSquare"
import Right1 from "./right1"
import Right2 from "./right2"
import Right3 from "./right3"
import RightCircle from "./rightCircle"
import RightSquare from "./rightSquare"
import Up1 from "./up1"
import Up2 from "./up2"
import Up3 from "./up3"
import UpCircle from "./upCircle"
import UpSquare from "./upSquare"

export type ArrowProps = {
	direction: "down" | "left" | "up" | "right"
	variant?: "circle" | "square" | "1" | "2" | "3"
} & React.SVGProps<SVGSVGElement>

const arrows: {
	[K in ArrowProps["direction"]]: {
		[K in NonNullable<ArrowProps["variant"]>]: typeof Down1
	}
} = {
	down: {
		circle: DownCircle,
		square: DownSquare,
		"1": Down1,
		"2": Down2,
		"3": Down3
	},
	left: {
		circle: LeftCircle,
		square: LeftSquare,
		"1": Left1,
		"2": Left2,
		"3": Left3
	},
	up: {
		circle: UpCircle,
		square: UpSquare,
		"1": Up1,
		"2": Up2,
		"3": Up3
	},
	right: {
		circle: RightCircle,
		square: RightSquare,
		"1": Right1,
		"2": Right2,
		"3": Right3
	}
}

export default function Arrow({ direction, variant = "1", ...props }: ArrowProps) {
	const Component = arrows[direction][variant]
	return <Component {...props} />
}
