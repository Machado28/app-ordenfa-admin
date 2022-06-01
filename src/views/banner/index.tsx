import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default function Banner() {
  return (
    <>
      <div>
        <S.Banner>
          <S.Header>
            <h3>Portal das Escolas</h3>

            <S.ContainerList>
              <S.List>
                <Link to="" className="Link">
                  Sobre
                </Link>
              </S.List>

              <S.List>
                <Link to="" className="Link">
                  Soluçoes
                </Link>
              </S.List>

              <S.List>
                <Link to="" className="Link">
                  Contactos
                </Link>
              </S.List>

              <S.List>
                <Link to="" className="Link">
                  Login
                </Link>
              </S.List>

              <S.List>
                <Link to="" className="Link">
                  Cadastrar
                </Link>
              </S.List>
            </S.ContainerList>
          </S.Header>

          <S.ContainerTitulo>
            <S.Titulo>Sistema de Gestão Escolar</S.Titulo>
            <S.Paragrafo>
              Qualifica a sua escola tendo um melhor controle tanto dos
              estudantes como dos seus funcionarios, ganhe praticidade agilidade
              e eficiência cadastrando a sua escola no Portal das Escolas e
              isufluir dos benefícios oferecido pelo melhor sistema de gestão.
            </S.Paragrafo>

            <S.Button>Cadastrar</S.Button>
          </S.ContainerTitulo>
        </S.Banner>
      </div>
    </>
  );
}
