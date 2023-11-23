import ListagemCard from '../Card'
import { ListagemContainer } from './style'
import sushi from '../../assets/images/sushirestaurant.png'
import italian from '../../assets/images/italianrestaurant.png'

const Listagem = () => {
  return (
    <ListagemContainer>
      <ListagemCard
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        imgurl={sushi}
        rate={4.9}
        tagUm="Destaque da semana"
        tagDois="Japonesa"
      />
      <ListagemCard
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        imgurl={italian}
        rate={4.6}
        tagUm="Italiana"
      />
      <ListagemCard
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        imgurl={sushi}
        rate={4.9}
        tagUm="Destaque da semana"
        tagDois="Japonesa"
      />
      <ListagemCard
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        imgurl={italian}
        rate={4.6}
        tagUm="Italiana"
      />
      <ListagemCard
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        imgurl={sushi}
        rate={4.9}
        tagUm="Destaque da semana"
        tagDois="Japonesa"
      />
      <ListagemCard
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        imgurl={italian}
        rate={4.6}
        tagUm="Italiana"
      />
    </ListagemContainer>
  )
}

export default Listagem
