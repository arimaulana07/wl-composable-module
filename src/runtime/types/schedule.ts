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