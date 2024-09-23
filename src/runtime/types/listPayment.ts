export interface ListPayment {
  code: string
  name: string
  group: string
  type_admin_fee: string
  admin_fee: number
  image: string
  image_v2: string
  terms: string
  manual: string
  flag_promo: number
  promo_text: string
  voucher: any[]
}
