import React from 'react';
import * as S from './styled'
import Container from '../../components/Container'


export default function Challenge(){
  return(
    <S.Wrapper>
      <Container>
        <S.SubWrapper>
          <S.Title>
          Por Que Nós?
          </S.Title>
       
<S.P>A OrbitHub é uma empresa mineira, apaixonada por resolver problemas e criar soluções tecnológicas.
</S.P>
<S.P>Utilizamos o que há de mais moderno e performático existente no mercado. As tecnologias adotadas em nossos projetos são as mesmas de grandes empresas como Netflix, AirBnB, Facebook, Instagram e outras.
</S.P>
</S.SubWrapper>
</Container>
    </S.Wrapper>
  )
}