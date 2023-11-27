import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 320px;
  height: 346px;
  display: block;
  color: ${cores.begeEscuro};
  padding: 8px 8px 50px 8px;
  background-color: ${cores.vermelho};

  &:nth-child(2) {
    justify-self: center;
  }
  &:nth-child(3) {
    justify-self: end;
  }
  &:nth-child(4) {
    justify-self: start;
  }
  &:nth-child(5) {
    justify-self: center;
  }
  &:nth-child(6) {
    justify-self: end;
  }
`

export const Image = styled.img`
  width: 304px;
  height: 167px;
  flex-shrink: 0;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  text-decoration: none;
  background-color: ${cores.begeEscuro};
  width: 100%;
  margin-top: 8px;
  padding: 4px 0px;

  color: ${cores.vermelho};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
