import React from 'react';
import * as S from './styled'
import Container from '../../components/Container'
import Button from '../../components/Button'


export default function Values(){
  return(
    <S.Wrapper>
      <Container>
        <S.Title>Investimento Total</S.Title>
        <S.Underline/>
        <S.P>O valor apresentado é referente aos serviços conforme detalhados acima.</S.P>
        <S.P>Os prazos de pagamento e entrega estão especificados na seção de cronograma.</S.P>
        <S.P>Esta proposta é válida até 05/02/2021.</S.P>
  <S.Form>
    <S.Table>
<tbody>
  <S.FormTitle>Serviços Totais</S.FormTitle>
  <S.FormText>Este é o preço único para esta proposta e está incluso no aceite por padrão.</S.FormText>
  
  <tr id="checked">
  <td><S.Input type="radio" id="radio" checked/>
  <S.Label htmlFor="radio">Todos os serviços acima</S.Label>
  </td>
  <td>R$ 29800.00</td>
  </tr>

  <S.FormTitle>Serviços Adicionais</S.FormTitle>
  <S.FormText>Este item é opcional e pode ser selecionado pelo cliente.</S.FormText>

  <tr>
    <td></td>
    <th>Preço Unitário</th>
  </tr>

  <tr>
  <td>
  <S.Input type="radio" id="radio" name="extra"/>
  <S.Label htmlFor="radio2">Suporte Mensal (5 horas)</S.Label>
  </td>
  <td>R$ 550.00</td>
  </tr>

  <tr>
  <td><S.Input type="radio" id="radio" name="extra"/><S.Label htmlFor="radio3">Suporte Mensal (10 horas)</S.Label></td>
  <td>R$ 1000.00</td>
  </tr>

  <tr>
  <th><S.FormTitle>Total (R$)</S.FormTitle></th>
  <th><S.FormTitle>29800.00</S.FormTitle></th>
  </tr>

  
 
</tbody>  
     </S.Table>
     <Button type="accept">Aceitar Proposta</Button>
  </S.Form>
  
      
      </Container>
       </S.Wrapper>
  )
}