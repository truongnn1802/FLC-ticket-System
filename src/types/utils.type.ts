export interface ItemBox {
  title: string
  content: string | JSX.Element
  txtButton: string
  icon: string
  href: string
}

export interface PropsBox extends ItemBox {
  arrColor: string[]
}
// export interface ResponseApi<Data>{
//   message:string
//   data?:Data
// }
export interface ResponseApi<Data> {
  uid: number
  user_context: {
    lang: string
    tz: string
    uid: number
  }
  company_id: 1
  company_ids: number[]
  partner_id: number
  name: string
  access_token: string
  go_to_backend: string
  company_name: boolean
  currency: 'VND'
  country: string
  contact_address: string
  customer_rank: number
}
