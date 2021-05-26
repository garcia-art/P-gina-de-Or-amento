import React from 'react'
import * as S from './styled.js'
import Container from '../../components/Container'
import Banner from '../../components/Banner'
import Button from '../../components/Button'

export default function Header(){
  return(
   
      <S.Wrapper src="/bg.png" src2="/bg2.png">
        <Container>
        <S.SubWrapper>
<S.Logo><S.Image src="/logo.png" alt="Empresa X S.A." layout="fill" /></S.Logo>
      
        <Banner>
        <S.Title>Proposta Comercial</S.Title>
        <S.SubTitle>à Unimed | de EmpresaX</S.SubTitle>
        </Banner>
        <Button href="#begin" type="see">Veja a Proposta</Button>
      </S.SubWrapper></Container>
      </S.Wrapper>
   
    
  );
}  