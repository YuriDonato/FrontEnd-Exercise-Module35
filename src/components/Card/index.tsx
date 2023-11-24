import * as S from './style'

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
    <S.Card>
      <S.CardImg imgurl={imgurl}>
        {tag.map((tag) => (
          <S.CardTag key={tag}>{tag}</S.CardTag>
        ))}
      </S.CardImg>
      <S.CardContainer>
        <div className="containerHeader">
          <S.CardTitle>{title}</S.CardTitle>
          <div>
            <S.CardRate>{rate}</S.CardRate>
            <img src={estrela} alt="estrela" />
          </div>
        </div>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardButton to={url}>Saiba mais</S.CardButton>
      </S.CardContainer>
    </S.Card>
  )
}

export default ListagemCard
