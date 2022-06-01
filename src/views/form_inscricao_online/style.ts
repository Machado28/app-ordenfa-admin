import styled from "styled-components";
import Fundo from "../../assets/images/SALIAS.jpg";

export const ContainerGeral = styled.div`
  .Geral {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .Modal {
    z-index: 9999999;
    padding: 20px 40px;
    border-radius: 3px;
    position: fixed;
    background: #fff;
    width: 800px;
    height: 400px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .CorpoModal {
    margin-top: 30px;
  }
`;

/*Modal*/
export const TitleModal = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial;
  font-size: 25px;
`;

export const CorpoDetras = styled.div`
  background-image: url(${Fundo});
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;

  .FotoTras {
    width: 50%;
  }

  .TextTras {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .FormInputEmail {
      padding: 50px 10px;

      width: 400px;
      height: 300px;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input {
        width: 100%;
        background: none;
      }

      label {
        font-family: Arial;
        font-size: 15px;
      }

      select {
        width: 100%;
        background: none;
      }

      button {
        background: none;
        border: none;
        background: #7159c1;
        padding: 10px 20px;
        color: #fff;
        margin-top: 10px;
      }
    }
  }
`;

export const TitleTras = styled.h1`
  color: #fff;
  width: 99%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  padding: 10px;
`;
