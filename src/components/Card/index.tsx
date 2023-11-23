import {
  Card,
  CardButton,
  CardContainer,
  CardDescription,
  CardImg,
  CardRate,
  CardTitle,
  Tag
} from './style'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  title: string
  imgurl: string
  description: string
  rate: number
  tagUm?: string
  tagDois?: string
}

const ListagemCard = ({
  title,
  imgurl,
  description,
  rate,
  tagUm,
  tagDois
}: Props) => {
  return (
    <Card>
      <CardImg imgurl={imgurl}>
        {tagUm ? <Tag>{tagUm}</Tag> : <></>}
        {tagDois ? <Tag>{tagDois}</Tag> : <></>}
      </CardImg>
      <CardContainer>
        <div className="containerHeader">
          <CardTitle>{title}</CardTitle>
          <div>
            <CardRate>{rate}</CardRate>
            <img src={estrela} alt="estrela" />
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
        <CardButton>Saiba mais</CardButton>
      </CardContainer>
    </Card>
  )
}

export default ListagemCard
