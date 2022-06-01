import React from "react";
import * as S from "./style";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Cards() {
  return (
    <>
      <S.Sobre>
        <img
          src="avatars/undraw_Real.png"
          alt="Imagem"
          width="600"
          height="400"
        />
        <S.ParceirosTitulo>
          O Portal das Escolas é um sistema de gestão completo
        </S.ParceirosTitulo>

        <S.ParceirosP>
          que vai integrar todos os processos, aumentar a eficiência e a
          produtividade de sua escola!
        </S.ParceirosP>
      </S.Sobre>

      <S.ContainerD>
        <S.ContainerCard>
          <S.ContainerCardMain>
            <S.ContainerCardIcon>
              <AiFillCheckCircle />
            </S.ContainerCardIcon>
            <S.ContainerP>Migração de dados segura!</S.ContainerP>
            <S.Span></S.Span>
          </S.ContainerCardMain>
          <S.ContainerCardSub>
            <S.ContainerCardP>
              Tratamos como prioridade aquilo que é mais valioso em sua escola,
              por isso a migração de dados do sistema de gestão escolar é feita
              com total segurança.
            </S.ContainerCardP>
          </S.ContainerCardSub>
        </S.ContainerCard>

        <S.ContainerCard>
          <S.ContainerCardMain>
            <S.ContainerCardIcon>
              <AiFillCheckCircle />
            </S.ContainerCardIcon>
            <S.ContainerP>A sua escola no centro de tudo!</S.ContainerP>
            <S.Span></S.Span>
          </S.ContainerCardMain>
          <S.ContainerCardSub>
            <S.ContainerCardP>
              Oferecemos uma gestão criativa e completa para as instituições de
              ensino, com ferramentas de controle financeiro, administrativo e
              pedagógico.
            </S.ContainerCardP>
          </S.ContainerCardSub>
        </S.ContainerCard>

        <S.ContainerCard>
          <S.ContainerCardMain>
            <S.ContainerCardIcon>
              <AiFillCheckCircle />
            </S.ContainerCardIcon>
            <S.ContainerParagrafo>
              segurança e estabilidade de dados!
            </S.ContainerParagrafo>

            <S.Span></S.Span>
          </S.ContainerCardMain>
          <S.ContainerCardSub>
            <S.ContainerCardP>
              Estudamos cada personagem do mundo educacional e suas
              necessidades, que nos permitiu criar soluções que proporcionem
              maior evolução para sua Instituição.
            </S.ContainerCardP>
          </S.ContainerCardSub>
        </S.ContainerCard>
      </S.ContainerD>
    </>
  );
}
