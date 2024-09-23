export interface CalculatePrice {
  is_kursi_tersedia: number
  list_kursi: ListKursi[]
  jumlah_tiket: number
  total_harga_tiket: number
  total_biaya_jemput: number
  total_biaya_antar: number
  total_discount_promo: number
  subtotal: number
  kode_voucher: string
  discount_voucher: number
  discount_addict: number
  discount_member: number
  total_discount: number
  biaya_addon_mutasi: number
  biaya_addon_asuransi: number
  biaya_addon_makanan: number
  biaya_addon_layanan: number
  admin_fee: number
  total_bayar: number
  komisi: number
  selisih_mutasi: number
  biaya_admin_selisih: number
  subtotal_selisih: number
  admin_fee_selisih: number
  total_bayar_selisih: number
  komisi_selisih: number
  list_kursi_pp: any
  list_harga: ListHarga[]
}

export interface ListKursi {
  nomor_kursi: number
  harga_tiket: number
  biaya_jemput: number
  biaya_antar: number
  biaya_addon_mutasi: number
  biaya_addon_asuransi: number
  biaya_addon_makanan: number
  biaya_addon_layanan: number
  nama_promo: string
  discount_promo: number
  total: number
}

export interface ListHarga {
  title: string
  value: number
  type: string
}
