import ListagemCard from '../Card'
import { ListagemContainer } from './style'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const Listagem = ({ restaurants }: Props) => {
  return (
    <ListagemContainer>
      {restaurants.map((restaurant) => (
        <ListagemCard
          key={restaurant.id}
          title={restaurant.title}
          description={restaurant.description}
          imgurl={restaurant.imgurl}
          rate={restaurant.rate}
          tag={restaurant.tag}
          url={restaurant.url}
        />
      ))}
    </ListagemContainer>
  )
}

export default Listagem
