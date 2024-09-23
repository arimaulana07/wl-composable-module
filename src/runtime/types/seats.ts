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

