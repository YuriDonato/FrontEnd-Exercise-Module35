import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Listagem from '../../components/Listagem'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushirestaurant.png'
import italian from '../../assets/images/italianrestaurant.png'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imgurl: sushi,
    rate: 4.9,
    tag: ['Destaque da semana', 'Japonesa'],
    url: '/sushi'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imgurl: italian,
    rate: 4.6,
    tag: ['Italiana'],
    url: '/italian'
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imgurl: sushi,
    rate: 4.9,
    tag: ['Destaque da semana', 'Japonesa'],
    url: '/sushi'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imgurl: italian,
    rate: 4.6,
    tag: ['Italiana'],
    url: '/italian'
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imgurl: sushi,
    rate: 4.9,
    tag: ['Destaque da semana', 'Japonesa'],
    url: '/sushi'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imgurl: italian,
    rate: 4.6,
    tag: ['Italiana'],
    url: '/italian'
  }
]

const Home = () => (
  <div>
    <Header page="home" />
    <Listagem restaurants={restaurantes} />
    <Footer />
  </div>
)

export default Home
