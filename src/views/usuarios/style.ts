import styled from "styled-components";
import tima from "../img/tima.jpg";

export const ContainerU = styled.div``;

export const Usuarios = styled.div`
  width: 100%;
  height: 600px;
  background: #fff;
  background-image: linear-gradient(
      rgba(133, 105, 253, 0.8),
      rgba(133, 105, 253, 0.8)
    ),
    url(${tima});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #8569fd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const UsuariosC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  padding: 10px;
`;

export const Icon = styled.div`
  font-size: 48px;
  color: #fff;
`;

export const UsuariosTitulo = styled.h3`
  font-size: 50px;
  font-weight: 800;
`;

export const UsuariosP = styled.p`
  font-size: 38px;
  font-weight: 300;
  text-align: center;
  color: #fff;
`;
