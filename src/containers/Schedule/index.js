import React from 'react';
import * as S from './styled'
import Container from '../../components/Container'

export default function Schedule(){
  return(
    <S.Wrapper>
    <Container>
      <S.SubWrapper>
      <S.Title>O Cronograma</S.Title>
     <S.P> Aqui, podem ser apresentados os prazos de execução dos serviços e pagamentos.</S.P>
     <S.P>Uma ideia boa é detalhar os prazos de execução junto aos detalhes dos pagamentos. Assim, fica mais fácil para o cliente comparar as entregas com o planejamento dos pagamentos.</S.P>
     <S.P>Veja um exemplo.</S.P>
     <S.Scroll>
     <S.Table>
<thead>
  <tr>
    <th></th>
    <th>Entrega</th>
    <th>Pagamento</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>3 dias</th>
    <td>Levantamento dos Requisitos</td>
    <td>Entrada - R$ 9.000</td>
  </tr>
  <tr>
    <th>7 dias</th>
    <td>Criação do Design da Aplicação</td>
    <td>Segunda Parcela (30 dias) - R$ 9.000</td>
  </tr>
  <tr>
    <th>45 dias</th>
    <td>Desenvolvimento da Aplicação Web</td>
    <td>Não Se Aplica</td>
  </tr>
  <tr>
    <th>7 dias</th>
    <td>Testes e Publicação da Aplicação</td>
    <td>Terceira Parcela (Entrega) - R$ 11.800</td>
  </tr>
 
</tbody>
</S.Table>
</S.Scroll>

<S.P>A execução dos serviços e conclusão dos resultados finais se darão em dois meses, conforme cronograma acima.</S.P>
<S.P>A etapa "Criação do Design da Aplicação" necessita da aprovação do cliente.</S.P>
<S.P>Quinzenalmente serão revistos os resultados e as estratégias realinhadas para atingir os objetivos almejados.</S.P>
</S.SubWrapper></Container>
       
  </S.Wrapper>
  )
}