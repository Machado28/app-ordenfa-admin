import styled from "styled-components";

export const Sobre = styled.div`
  width: 100%;
  height: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ParceirosTitulo = styled.h3`
  color: #1fcdff;
  font-size: 34px;
  font-weight: 300;
`;

export const ParceirosP = styled.p`
  font-size: 32px;
  font-weight: 800;
  color: #785afd;
  width: 70%;
  text-align: center;
`;

export const ContainerD = styled.div`
  width: 100%;
  height: 600px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  width: 250px;
  height: 420px;
  margin: 0.8rem;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0px 0px 28px #ccc;
  transform: 0.4s;

  :hover {
    transform: scale(0.9);
  }
`;

export const ContainerCardMain = styled.div`
  width: 250px;
  height: 196px;
  border-radius: 25px 25px 0 0;
  background: #785afd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerCardIcon = styled.div`
  color: #76ccfe;
  font-size: 38px;
`;

export const ContainerP = styled.p`
  width: 50%;
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
`;

export const Span = styled.div`
  width: 58px;
  height: 3px;
  background: #76ccfe;
`;

export const ContainerCardSub = styled.div``;
export const ContainerCardP = styled.p`
  text-align: center;
  margin: 28px;
`;

export const ContainerParagrafo = styled.p`
  width: 50%;
  color: #fff;
  text-align: center;
  font-size: 16px;
`;
