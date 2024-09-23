export interface DetailBooking {
  kode_booking: string
  telp_pemesan: string
  nama_pemesan: string
  alamat_pemesan: string
  email_pemesan: string
  waktu_pesan: string
  jenis_pembayaran: string
  kode_bayar: string
  batas_pembayaran: string
  payment_id: string
  payment_url: string
  payment_data: PaymentData
  payment_channel: string
  sales_channel: string
  otp: string
  waktu_bayar: string
  status: string
  is_lunas: number
  total_harga_tiket: number
  sub_total: number
  total_discount: number
  admin_fee: number
  total_bayar: number
  is_connecting: number
  tgl_berangkat_awal: any
  jam_berangkat_awal: any
  tgl_berangkat_pergi: string
  jam_berangkat_pergi: string
  rute_pergi: string
  id_rute_pergi: string
  id_outlet_asal_pergi: string
  kode_outlet_asal_pergi: string
  outlet_asal_pergi: string
  kota_asal_pergi: string
  id_outlet_tujuan_pergi: string
  kode_outlet_tujuan_pergi: string
  outlet_tujuan_pergi: string
  kota_tujuan_pergi: string
  kode_kendaraan_pergi: any
  nomor_polisi_pergi: any
  nama_sopir_pergi: any
  tgl_berangkat_pulang: string
  jam_berangkat_pulang: string
  rute_pulang: string
  id_rute_pulang: string
  id_outlet_asal_pulang: string
  kode_outlet_asal_pulang: string
  outlet_asal_pulang: string
  kota_asal_pulang: string
  id_outlet_tujuan_pulang: string
  kode_outlet_tujuan_pulang: string
  outlet_tujuan_pulang: string
  kota_tujuan_pulang: string
  kode_kendaraan_pulang: string
  nomor_polisi_pulang: string
  nama_sopir_pulang: string
  url_rating: string
  is_rating_reviewed: number
  is_sampai: number
  url_etiket: string
  url_tracking: string
  detail_tiket: DetailTiket[]
  detail_tiket_pp: any
  list_harga: ListHarga[]
}

export interface PaymentData {
  qr_url: string
  qr_nmid: string
}

export interface DetailTiket {
  no_tiket: string
  id_outlet_asal: string
  kode_outlet_asal: string
  outlet_asal: string
  kota_asal: string
  alamat_outlet_asal: string
  maps_outlet_asal: string
  id_outlet_tujuan: string
  kode_outlet_tujuan: string
  outlet_tujuan: string
  kota_tujuan: string
  alamat_outlet_tujuan: string
  maps_outlet_tujuan: string
  tgl_berangkat: string
  jam_berangkat: string
  waktu_pesan: string
  id_rute: string
  id_produk: string
  kode_jadwal: string
  list_transit: ListTransit[]
  layanan: string
  area_jemput: string
  nama_area_jemput: any
  ket_area_jemput: string
  alamat_jemput: string
  area_antar: string
  nama_area_antar: any
  ket_area_antar: string
  alamat_antar: string
  maskapai: string
  nama_maskapai: string
  terminal: string
  jam_landing: string
  harga: number
  biaya_antar: number
  biaya_jemput: number
  biaya_addon_mutasi: number
  biaya_addon_asuransi: number
  admin_fee: number
  discount: number
  harga_total: number
  penumpang: Penumpang
  jenis_pembayaran: string
  payment_url: string
  payment_id: string
  payment_data: PaymentData2
  payment_channel: string
  terms: string
  manual: string
  sales_channel: string
  otp: string
  kode_pembayaran: string
  batas_pembayaran: string
  waktu_bayar: string
  is_pernah_mutasi: number
  data_mutasi: any
  mutasi_dari: string
  mutasi_dari_tgl: string
  mutasi_dari_jam: string
  mutasi_dari_kursi: string
  waktu_mutasi: string
  is_mutasi: number
  max_proses_mutasi: string
  min_tgl_mutasi: string
  max_tgl_mutasi: string
  url_tracking: string
  kode_kendaraan: any
  nomor_polisi: any
  nama_sopir: any
  is_batal: number
}

export interface ListTransit {
  tgl_berangkat: string
  jam_berangkat: string
  ewt: number
  id_outlet: string
  kode_outlet: string
  nama_outlet: string
  alamat: string
  latitude: string
  longitude: string
}

export interface Penumpang {
  telp: string
  nama: string
  no_kursi: string
  qr_content: string
  url_img_qr: string
  no_tiket: string
}

export interface PaymentData2 {
  qr_url: string
  qr_nmid: string
}

export interface ListHarga {
  title: string
  value: number
  type: string
}
