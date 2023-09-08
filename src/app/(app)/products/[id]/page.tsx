interface Props {
  params: {
    id: number
  }
}

export default function Product({ params }: Props) {
  return <h4>Producto no. {params.id}</h4>
}
