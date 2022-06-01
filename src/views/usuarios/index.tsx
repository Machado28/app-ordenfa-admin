import React from "react";
import * as S from "./style";
import {
  AiOutlineBank,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
export default function Usuarios() {
  return (
    <>
      <S.ContainerU>
        <S.Usuarios>
          <S.UsuariosC>
            <S.Icon>
              <AiOutlineUser />
            </S.Icon>

            <S.UsuariosTitulo>+2 mil</S.UsuariosTitulo>

            <S.UsuariosP>Enfermairos gerenciados</S.UsuariosP>
          </S.UsuariosC>

          <S.UsuariosC>
            <S.Icon>
              <AiOutlineUsergroupAdd />
            </S.Icon>

            <S.UsuariosTitulo>+30 mil</S.UsuariosTitulo>

            <S.UsuariosP>usuários conectados</S.UsuariosP>
          </S.UsuariosC>

          <S.UsuariosC>
            <S.Icon>
              <AiOutlineBank />
            </S.Icon>

            <S.UsuariosTitulo>+3 mil</S.UsuariosTitulo>

            <S.UsuariosP>Organizações como a Ordenfa  Enfermairos</S.UsuariosP>
          </S.UsuariosC>
        </S.Usuarios>
      </S.ContainerU>
    </>
  );
}
