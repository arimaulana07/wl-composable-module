export interface requestTokenBody {
  grant_type: string;
  client_id: string;
  client_secret: string;
}

export interface GetScheduleParams {
  outletasal: string | number;
  outlettujuan: string | number;
  tglberangkat: string;
}

export interface GetSeatsParams {
  tglberangkat: string;
  idproduk: string | number;
  outletasal: string | number;
  outlettujuan: string | number;
}

export interface GetCalculatePriceParams {
  tglberangkat: string;
  idproduk: string | number;
  idoutletpickup: string | number;
  idoutletdropoff: string | number;
  nomorkursi: string;
  paymentchannel?: string;
  isasuransi: number;
}

export interface GetBookingParams {
  tglberangkat: string;
  tglberangkatinduk: string;
  idproduk: string | number;
  idoutletpickup: string | number;
  idoutletdropoff: string | number;
  jamberangkat: string;
  telppemesan: string | number;
  namapemesan: string;
  alamatpemesan: string;
  emailpemesan: string;
  keterangan: string;
  namapenumpang: string;
  nomorkursi: string;
  payment: string;
  adminfee: string | number;
  saleschannel: string;
  isasuransi: number;
}

export interface BookingDetailParams {
  kodebooking: string;
}

/* ========= Response ========== */

/* Departure Outlets */
export interface OutletDeparture {
  id: string;
  group: string;
  kode: string;
  nama: string;
  telpon: string;
  alamat: string;
  latitude: string;
  longitude: string;
  kode_kota: string;
  kota: string;
  flag_agen: string | number;
  flag_aktif: string | number;
  img: string;
  url_map?: string;
  list_img: Array<string>;
}

export interface City {
  kode: string;
  nama: string;
  group: string;
  img: string;
}

export interface Departures {
  outlet: OutletDeparture[] | null;
  kota: City[] | null;
}

/* Destination Outlets */
export interface OutletDestination extends OutletDeparture {
  flag_bandara: number | number;
  url_map_tujuan: string;
  min_tarif: number;
  max_tarif: number;
  range_tarif: string;
}

export interface Destinations {
  outlet: OutletDestination[] | null;
  kota: City[] | null;
}


/* Booking */
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


/* Calculate Price */
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

/* Detail Booking */
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


/* List Payment */
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


/* Schedule */
export interface Schedule {
  id_produk: string
  kode_produk: string
  rute: string
  id_outlet_pickup: string
  nama_outlet_pickup: string
  alamat_outlet_pickup: string
  maps_outlet_pickup: string
  id_outlet_dropoff: string
  nama_outlet_dropoff: string
  alamat_outlet_dropoff: string
  maps_outlet_dropoff: string
  estimasi_waktu_tempuh: number
  estimasi_waktu_tempuh_menit: number
  estimasi_waktu_tempuh_str: string
  tgl_berangkat_induk: string
  jam_berangkat: string
  tgl_sampai: string
  jam_sampai: string
  max_waktu_book: string
  id_layanan: string
  nama_layanan: string
  tipe_kendaraan: string
  tarif: number
  range_tarif: string
  min_tarif: number
  max_tarif: number
  range_tarif_disc: string
  min_tarif_disc: number
  max_tarif_disc: number
  biaya_addon_mutasi: number
  promo: Promo[]
  jumlah_kursi: number
  sisa_kursi: number
  kursi_terisi: number
  keterangan: string
  is_jadwal_dioperasikan: string
  is_jadwal_lewat: number
  is_waktu_verify: number
  is_waktu_verify_maskapai: number
  is_pilih_kursi: number
  show_area_antar_jemput: number
  is_transit: number
  list_transit: ListTransit[]
  is_connecting: number
  list_connecting: any[]
  list_transit_connecting: ListTransitConnecting[]
}

export interface Promo {
  kode_promo: string
  nama_promo: string
  nominal: number
  kursi: string
}

export interface ListTransit {
  nama: string
  ewt_menit: number
  jam: string
}

export interface ListTransitConnecting {
  tgl_berangkat: string
  jam_berangkat: string
  id_produk: string
  kode_produk: string
  id_outlet_pickup: string
  nama_outlet_pickup: string
  id_outlet_dropoff: string
  nama_outlet_dropoff: string
  ewt_connecting: number
  waktu_tunggu: number
}

/* Seats */
export interface Seats {
  totalpenumpang: string
  metodepenjualan: string
  totalkuota: any
  totalpenumpangagen: number
  tipe_kendaraan: string
  id_layout: string
  baris: string
  kolom: string
  kapasitas: string
  petalayout: Petalayout
  totalpenumpang_pp: string
  metodepenjualan_pp: string
  totalkuota_pp: string
  totalpenumpangagen_pp: string
  baris_pp: string
  kolom_pp: string
  kapasitas_pp: string
  petalayout_pp: string
  asuransi: number
}

export interface Petalayout {
  [key: string]: PetaLayoutItem
}

export interface PetaLayoutItem {
  status: string
  label: string
  tglberangkat: string
  idproduk: string
  idoutletpickup: string
  idoutletdropoff: string
  dek: any
  notiket: any
  kodebooking: any
  nama: any
  istransit: number
  iscetaktiket: any
  jenispembayaran: any
  isboarding: any
  waktupesan: any
  hargatiket: number
  kodepromo: string
  namapromo: string
  nominal: number
  totalbayar: number
  issmoking: number
  isagenverified: number
  asuransi: number
}

