import React from 'react'
import * as S from './styled'
import Container from '../../components/Container'

export default function Testimonials(){
  return(
    <S.Wrapper>
      <Container>
        <S.SubWrapper>
      <S.Quote>
      <S.Text>
      "A melhor empresa da região quando o assunto é tratar de sites e sistemas. Simplesmente excelente."
      </S.Text> 
      <S.Sign>- <strong>Fulano</strong>, Empresa N, Cliente desde 2010</S.Sign>
    </S.Quote> </S.SubWrapper> </Container>
    </S.Wrapper>
  )
}