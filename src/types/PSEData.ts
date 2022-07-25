// Generated using: https://app.quicktype.io/

export interface PSEData {
  type: Type
  id: number
  attributes: Attributes
}

export interface Attributes {
  nomor_pb_umku: null | string
  nama: string
  website: string
  sektor: string
  nama_perusahaan: string
  tanggal_daftar: string
  nomor_tanda_daftar: string
  qr_code: string
  status_id: StatusID
  sistem_elektronik_id: number
}

export enum StatusID {
  Terdaftar = 'TERDAFTAR'
}

export enum Type {
  TdpseTerbit = 'tdpseTerbit'
}
