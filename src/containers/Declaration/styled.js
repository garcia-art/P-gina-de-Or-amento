import styled from 'styled-components';

export const Wrapper = styled.section`
background:linear-gradient(to bottom right, #BB2020, #D90C02); 
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  color: #fff;
  padding: 30px 0;
`;

export const Title = styled.h2`
  font-size: 2em;
`;

export const Text = styled.p`
font-style: italic;
`;

export const Sign = styled.span`
align-self: flex-end;
font-style: initial;
font-weight: 500;
font-size: 1.2em;
`;
