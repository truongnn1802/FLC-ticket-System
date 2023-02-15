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
