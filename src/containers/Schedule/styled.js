import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const SubWrapper = styled.div`
padding: 20px 0;
`;

export const Table = styled.table`
border-collapse: collapse;
font-size: 1.5em;
width: 100%;
th,td{
  border: 1px dashed #000;
  padding: 10px ;
  min-width: 100px;
}
td{
  min-width: 400px;

}

`;

export const Scroll = styled.div`
overflow-x: scroll;
margin: 40px 0;

@media (min-width:1000px){
  overflow-x: hidden;
}
`;


export const Title = styled.h2``;

export const P = styled.p``;