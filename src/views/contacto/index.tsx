import React from "react";
import * as S from "./style";

export default function Contacto() {
  return (
    <>
      <S.Div>
        <S.DivContacto>
          <S.DivCard>
            <S.DivContactoTitulo>
              DÊ O PRIMEIRO PASSO RUMO AO SUCESSO E CRESCIMENTO DA SUA ESCOLA
            </S.DivContactoTitulo>
            <S.ContainerInput>
              <S.input type="text" placeholder="Goreth Manuel" />
              <S.input type="number" placeholder="928 33 33 33" />
            </S.ContainerInput>

            <S.ContainerInput>
              <S.Textarea id="message" placeholder="Deixe a sua mensagem" />
            </S.ContainerInput>

            <S.inputButton>Enviar</S.inputButton>
          </S.DivCard>
        </S.DivContacto>
      </S.Div>
    </>
  );
}
