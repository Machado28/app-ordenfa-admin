import styled from "styled-components";
import Web from "../img/Web.png";

export const Banner = styled.div`
  background-image: url(${Web});
  width: 100%;
  height: 900px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Home = styled.div`
  div {
    background: #fff;
  }
`;

export const Header = styled.header`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

export const ContainerList = styled.ul`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 14px 0 0 0;
`;

export const List = styled.li`
  list-style: none;
  padding: 10px 20px;
  // saiu o bug do header
  .Link {
    color: #fff;
    font-size: 16px;

    :hover {
      color: #785afd;
    }
  }
`;

export const ContainerTitulo = styled.div`
  width: 40%;
  display: flex;
  margin: 10rem 5rem;
  flex-direction: column;
  justify-content: center;
`;

export const Titulo = styled.h1`
  font-size: 46px;
  font-weight: 800;
  color: #785afd;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  padding: 16px 0;
  color: #1c1c1c;
`;

export const Button = styled.button`
  width: 38%;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  box-shadow: 0 0px 2px #1c1c1c;
  background: #785afd;
  border-radius: 10px;
  box-shadow: 0 0 10px #1c1c1c;

  :hover {
    border: 1px solid #785afd;
    background: none;
  }
`;
