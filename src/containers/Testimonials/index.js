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
      "Os serviços prestados foram executados com maestria e profissionalismo, dentro dos prazos e além das expectativas. Com certeza essa é a melhor empresa do setor."
      </S.Text> 
      <S.Sign>- <strong>João Arouca</strong>, mm2g, Cliente desde 2019</S.Sign>
    </S.Quote> </S.SubWrapper> </Container>
    </S.Wrapper>
  )
}