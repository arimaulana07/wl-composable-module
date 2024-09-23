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
}

export interface BookingDetailParams {
  kodebooking: string;
}