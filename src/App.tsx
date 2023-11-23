import { GlobalCss } from './styles'
import Header from './components/Header'
import Listagem from './components/Listagem'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <Listagem />
        <Footer />
      </div>
    </>
  )
}

export default App
