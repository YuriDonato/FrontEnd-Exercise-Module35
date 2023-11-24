import Menu from '../../models/Menu'
import * as S from './style'

const CardMenu = ({ description, imgurl, title }: Menu) => (
  <S.Container>
    <S.Image src={imgurl} alt="" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.Container>
)

export default CardMenu
