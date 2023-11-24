import Menu from '../../models/Menu'
import { Button, Container, Description, Image, Title } from './style'

const CardMenu = ({ description, imgurl, title }: Menu) => (
  <Container>
    <Image src={imgurl} alt="" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </Container>
)

export default CardMenu
