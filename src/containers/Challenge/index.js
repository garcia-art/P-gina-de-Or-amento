import React from 'react';
import * as S from './styled'
import Container from '../../components/Container'


export default function Challenge(){
  return(
    <S.Wrapper>
      <Container>
        <S.SubWrapper>
          <S.Title>
          O Desafio
          </S.Title>
       
<S.P>Um dos principais desafios das empresas é a organização financeira e o aproveitamento dos dados gerados através de vendas, consultas e demais atividades. Nada mais importante do que atualizar as ferramentas e optimizar esses processos.</S.P>
<S.P>Para isso, estamos dispostos a ajuda você a criar uma solução digital para o controle de comissão de seus colaboradores.</S.P>
</S.SubWrapper>
</Container>
    </S.Wrapper>
  )
}