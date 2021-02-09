import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SubWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
padding: 40px 0;
flex-direction: column;
`;

export const Title = styled.h2`
text-align: center;
padding-bottom: 5px;
margin-top: 10px;
`;

export const P = styled.p`
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
#checked{
  background: #e0e0e0;
}
`;

export const Input = styled.input`
margin: 0 15px;

`;

export const Label = styled.label``;

export const FormTitle = styled.p`
margin: 10px 0;
`;

export const FormText = styled.p`
font-size:0.8em;
margin: 10px 0;
`;

export const Table = styled.table`
border-collapse: collapse;
margin-bottom: 2em;

td{
  padding: 20px 0 ;
}

th{
  text-align: left;
  padding: 5px 0 ;
  font-weight:600;
  background: #fff;
}



tr:hover{
  background: #e0e0e0;
}

`;

export const Underline = styled.div`
  border-bottom: 1px solid #1E1E1E;
  width: 180px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

