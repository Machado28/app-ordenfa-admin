import styled from "styled-components";
import phone from "../img/phone.jpg";

export const Div = styled.div`
  width: 100%;
  height: 600px;
  background: #fff;
  background-image: linear-gradient(
      rgba(118, 204, 254, 0.8),
      rgba(118, 204, 254, 0.8)
    ),
    url(${phone});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #8569fd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const DivContacto = styled.div``;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivContactoTitulo = styled.h3`
  color: #fff;
  text-align: center;
  width: 80%;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const input = styled.input`
  width: 52%;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 12px;
  background: none;
  color: #fff;
  margin: 10px 5px;
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  background: none;
  height: 120px;
  width: 364px;
  margin: 16px 0;
  border: 1px solid #fff;
  padding: 12px;
`;

export const inputButton = styled.button`
  color: #fff;
  border: none;
  width: 360px;
  padding: 10px 38px;
  border-radius: 14px;
  background: #785afd;
  transition: 0.8s;

  :hover {
    background: #705af1;
  }
`;
