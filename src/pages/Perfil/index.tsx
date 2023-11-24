import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemPerfil from '../../components/ListagemPerfil'

import Banner from '../../components/Banner'
import { cardapioItaliano, cardapioJapones } from '../../components/Cardapio'

type Props = {
  comida: 'Italiana' | 'Sushi'
}

const Perfil = ({ comida = 'Italiana' }: Props) => (
  <>
    <Header page="perfil" />
    {comida === 'Italiana' ? (
      <>
        <Banner name="La Dolce Vita Trattoria" genre={comida} />
        <ListagemPerfil cardapio={cardapioItaliano} />
      </>
    ) : (
      <>
        <Banner name="Hioki Sushi" genre="Japonesa" />
        <ListagemPerfil cardapio={cardapioJapones} />
      </>
    )}
    <Footer />
  </>
)

export default Perfil
