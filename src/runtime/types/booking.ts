export interface Booking {
  kodeBooking: string
  noTiket: string[]
  kodePembayaran: string
  batasPembayaran: any
  paymentUrl: string
  paymentData: string
  paymentId: string
  tglBerangkat: string
  harga: number
  discountVoucher: number
  discountPromo: number
  discountPotongan: number
  adminFee: number
  totalHarga: number
}
