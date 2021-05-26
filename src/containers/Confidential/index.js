import React from 'react'
import * as S from './styled'
import Container from '../../components/Container'
import Button from '../../../src/components/Button'


export default function Confidencial(){
  return(
  <>
    <S.Wrapper id="begin">
      <Container>
        <S.SubWrapper>
      <S.Title>Termo de Confidencialidade</S.Title>
      <S.Text>
      <S.P>
      Este documento, assim como seu conteúdo, deve ser tratado como propriedade confidencial da Empresa X, não podendo ser divulgado a terceiros ou reproduzido de forma parcial ou integral sem prévia autorização e aprovação da [nome da empresa].
      </S.P>
      <S.P>
      Informações técnicas eventualmente obtidas durante a realização das atividades envolvidas nesta proposta comercial, como especificação, funcionamento ou planos de ação a serem executados são igualmente confidenciais e sigilosas.
      </S.P>
      <S.P>
      Ao prosseguir com a leitura dessa proposta você automaticamente concorda com os termos acima.
      </S.P>
      
      </S.Text>
      <Button type="agreed" href="#declaration">Prosseguir</Button>
      </S.SubWrapper>
      </Container>
      </S.Wrapper>
  
  </>
  )
} 