
import React from 'react';
import * as S from './styled';
import Container from '../../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
  return(
  <S.Wrapper>
    <Container>
      <S.SubWrapper>
      <S.Content>
        <S.P>
          <FontAwesomeIcon icon={faStar}/>
        <p>EmpresaX S.A.</p>
        </S.P>
        <S.P>
        <FontAwesomeIcon icon={faPhone}/>
        <p>(37) 99999-9999</p>
        </S.P>
      </S.Content>
      <S.Content>
        <S.P>
        <FontAwesomeIcon icon={faEnvelope}/>
        <p>comercial@empresax.com.br</p></S.P>
        <S.P>
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
        <p>Av. Paulista, 100, sala 13, Divinópolis - MG</p>
        </S.P>
      </S.Content>
    </S.SubWrapper>
    </Container>
  </S.Wrapper>);
  
}