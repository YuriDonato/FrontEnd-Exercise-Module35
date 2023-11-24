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
  tag: string[]
  url: string
}

const ListagemCard = ({
  title,
  imgurl,
  description,
  rate,
  tag,
  url
}: Props) => {
  return (
    <Card>
      <CardImg imgurl={imgurl}>
        {tag.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
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
        <CardButton to={url}>Saiba mais</CardButton>
      </CardContainer>
    </Card>
  )
}

export default ListagemCard
