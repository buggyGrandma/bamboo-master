export const p2e = (s: string) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())

export const a2e = (s: string) => s.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())

export const pa2e = (s: string) => p2e(a2e(s))

export const e2p = (s: string) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
export const e2a = (s: string) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])
