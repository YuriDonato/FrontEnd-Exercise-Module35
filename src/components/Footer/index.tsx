import {
  FooterContainer,
  FooterLogo,
  FooterSocialContainer,
  FooterText
} from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={logo} />
      <FooterSocialContainer>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </FooterSocialContainer>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
