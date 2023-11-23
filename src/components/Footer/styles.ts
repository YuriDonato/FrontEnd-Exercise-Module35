import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  width: 100%;
  height: 298px;
  background-color: ${cores.begeEscuro};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FooterLogo = styled.img`
  padding-top: 40px;
  padding-bottom: 32.5px;
  width: 125px;
`

export const FooterText = styled.p`
  padding-top: 80px;
  padding-bottom: 40px;
  color: ${cores.vermelho};
  text-align: center;
  font-size: 16px;
`

export const FooterSocialContainer = styled.div`
  img {
    width: 32px;
    height: 24px;
    flex-shrink: 0;
    padding-left: 8px;
  }
`
