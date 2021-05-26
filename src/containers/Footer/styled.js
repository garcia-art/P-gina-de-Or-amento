import styled from 'styled-components';

export const Wrapper = styled.div`
     background: #04395E;
     
`;

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    padding: 30px 0;
    width: 100%;

    @media (min-width: 700px){
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    max-width: 300px;

`;

export const P = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  
  p{
    margin-left: 10px;
    font-size: 1.0em;
  }
`;