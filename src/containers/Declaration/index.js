import React from 'react'
import * as S from './styled'
import Container from '../../components/Container'

export default function Declaration(){
  return(
    <S.Wrapper id="declaration">
      <Container>
        <S.SubWrapper>
      <S.Title>
        Cliente,</S.Title>
      <S.Text>
        Conforme solicitado, apresentamos aqui nossa proposta para realização dos serviços desejados.
      </S.Text>
      <S.Text>
      Desde já, agradecemos a oportunidade e confiança.
      </S.Text> 
      <S.Sign>Ass. Lucas Couto , OrbitHub</S.Sign>
     </S.SubWrapper> </Container>
    </S.Wrapper>
  )
}