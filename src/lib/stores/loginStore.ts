import { create } from "zustand"
import type { Nullable } from "../typeHelpers"

type LoginState = {
	account: string
	otpExpiration: Nullable<Date>
	eulaAccepted: boolean
	setAccount: (account: string) => void
	setOtpExpiration: (otpExpiration: Nullable<Date>) => void
	setEulaAccepted: (eulaAccepted: boolean) => void
}

export const useLoginStore = create<LoginState>((set) => ({
	account: "",
	otpExpiration: null,
	eulaAccepted: false,
	setAccount: (account) => set(() => ({ account })),
	setOtpExpiration: (otpExpiration) => set(() => ({ otpExpiration })),
	setEulaAccepted: (eulaAccepted) => set(() => ({ eulaAccepted }))
}))
