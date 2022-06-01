import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CInput,
  CLabel,
  CRow,
  CCol,
  CSelect,
  CButton,
} from "@coreui/react";


function Incricoes() {
  return (
    <>
      <CCard>
        <CCardHeader> Fazer Inscrição </CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol md="6">
                <CLabel htmlForm="name">Full Name</CLabel>
                <CInput name="name" id="name" placeholder="Name" />
              </CCol>
              <CCol md="6">
                <CLabel htmlForm="date-nasc">Data de Nascimento</CLabel>
                <CInput
                  type="date"
                  name="date-nasc"
                  id="date-nasc"
                  placeholder="Data de Nascimento"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="6">
                <CLabel htmlFor="bi">Bi Number</CLabel>
                <CInput type="text" name="bi" id="bi" placeholder="Bi Number" />
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="address"> Endereço </CLabel>
                <CInput
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Ex: Angola Luanda, Sambizanga Casa S/N"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="4">
                <CLabel> Género </CLabel>
                <CSelect custom name="gender" id="gender">
                  <option value="null">Selecione o Género</option>
                  <option value="masculino"> Masculino </option>
                  <option value="femenino"> Femenino </option>
                  <option value="outro"> Outro </option>
                </CSelect>
              </CCol>
              <CCol md="4">
                <CLabel> Curso </CLabel>
                <CSelect custom name="curso" id="curso">
                  <option value="null">Selecione o Curso</option>
                  <option value="CFB">Ciência Físicas e Biológicas</option>
                  <option value="CFJ">Ciência Económicas e Jurídicas</option>
                  <option value="MP"> Magitério Primário </option>
                  <option value="EI"> Educador de Infância </option>
                </CSelect>
              </CCol>
              <CCol md="4">
                <CLabel>Classe</CLabel>
                <CSelect custom name="classe" id="classe">
                  <option value="null">Selecione a Classe</option>
                  <option value="10ª"> 10ª Décima </option>
                  <option value="11ª"> 11ª Décima Primeira </option>
                  <option value="12ª"> 12ª Décima Segunda </option>
                  <option value="13ª"> 13ª Décima Terceira </option>
                </CSelect>
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="4">
                <CLabel htmlFor="escola-anterior"> Escola Anterior </CLabel>
                <CInput
                  name="escola-anterior"
                  id="escola-anterior"
                  placeholder="Ex: Santa Catarina"
                />
              </CCol>
              <CCol md="4">
                <CLabel htmlFor="classe-anterior"> Classe Anterior </CLabel>
                <CInput
                  name="classe-anterior"
                  id="classe-anterior"
                  placeholder="Ex: 9ª Classe"
                />
              </CCol>
              <CCol md="4">
                <CLabel htmlFor="media-final">
                  Média Final da Classe Anterior
                </CLabel>
                <CInput
                  name="media-final"
                  id="media-final"
                  placeholder="Ex: 12 Valores"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="6">
                <CLabel htmlFor="name-mae">Nome da Mãe</CLabel>
                <CInput
                  type="text"
                  name="name-mae"
                  id="name-mae"
                  placeholder="Nome da Mãe"
                />
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="name-pai">Nome do Pai</CLabel>
                <CInput
                  type="text"
                  name="name-pai"
                  id="name-pai"
                  placeholder="Nome do Pai"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="6">
                <CLabel htmlFor="certificado">Certificado ou Declaração</CLabel>
                <CInput type="file" name="certificado" id="certificado" />
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="docident"> Documento de Identificação </CLabel>
                <CInput type="file" name="docident" id="docident" />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol>
                <CButton color="primary" type="submit">
                  Inscrever-se
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
}

export default Incricoes;
