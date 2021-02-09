import styled from 'styled-components';

export const Wrapper = styled.section`
  background-image:url(${(props)=>(props.src)});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  @media (min-width:1000px){
    background-image:url(${(props)=>(props.src2)});
  }
`;

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    padding: 40px 0;
    height: 100%;
`;

export const Logo = styled.div`
width:300px;
margin-bottom: 40px;
`;

export const Image = styled.img`
width: 100%;
`;

export const Title = styled.div`
  text-transform: uppercase;
  display: flex;
  font-weight: 500;
  font-size: 3em;
  
`;

export const SubTitle = styled.div``;

