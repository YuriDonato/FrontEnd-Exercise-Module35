import Menu from '../../models/Menu'
import CardMenu from '../CardMenu'
import { ListagemContainer } from './style'

type PropsPerfil = {
  cardapio: Menu[]
}

const ListagemPerfil = ({ cardapio }: PropsPerfil) => {
  return (
    <ListagemContainer>
      {cardapio.map((item) => (
        <CardMenu
          key={item.id}
          id={item.id}
          imgurl={item.imgurl}
          title={item.title}
          description={item.description}
        />
      ))}
    </ListagemContainer>
  )
}

export default ListagemPerfil
