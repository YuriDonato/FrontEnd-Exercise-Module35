import { Container, FoodGenre, RestaurantName, BlackContainer } from './style'

type Props = {
  name: string
  genre: string
}

const Banner = ({ name, genre }: Props) => (
  <BlackContainer>
    <Container genre={genre}>
      <div>
        <FoodGenre>{genre}</FoodGenre>
        <RestaurantName>{name}</RestaurantName>
      </div>
    </Container>
  </BlackContainer>
)

export default Banner
