
import React from 'react';
import * as S from './styled';
import Container from '../../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
  return(
  <S.Wrapper>
    <Container>
      <S.SubWrapper>
      <S.Content>
        <S.P>
          <FontAwesomeIcon icon={faRocket}/>
        <p>OrbitHub</p>
        </S.P>
        <S.P>
        <FontAwesomeIcon icon={faPhone}/>
        <p>(37) 99118-1831</p>
        </S.P>
      </S.Content>
      <S.Content>
        <S.P>
        <FontAwesomeIcon icon={faEnvelope}/>
        <p>comercial@orbithub.com.br</p></S.P>
        <S.P>
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
        <p>Av. João Paulo II, 1400, sala 114 Nova Serrana - MG</p>
        </S.P>
      </S.Content>
    </S.SubWrapper>
    </Container>
  </S.Wrapper>);
  
}