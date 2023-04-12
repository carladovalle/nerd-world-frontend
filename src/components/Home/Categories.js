import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

export function Categories() {
  
  return (
    <Wrapper>
      <h1>Categorias</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
    color: #76C352;
  }
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Category = styled.div`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 250ms ease;
  background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5)),
    url(${props => props.image});
  background-position: center;
  background-size: cover;
  
  border-radius: 20px;
  border: 3px solid #F5FAD1;
  :hover{
    border: 3px solid #76C352;
    filter: brightness(1.2);
    h2 {
      font-weight: 700;
    }
  }
  h2 {
    color: #F5FAD1;;
    font-size: 26px;
    font-weight: 600;
    text-shadow: black 0.1em 0.1em 0.2em;
    transition: all 500ms ease;
  }
`;