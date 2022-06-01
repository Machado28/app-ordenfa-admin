import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CInput,
  CLabel,
  CRow,
  CTextarea,
} from "@coreui/react";
import React, { useState } from "react";

function AddClasse() {
  //eslint-disable-next-line
  const [validated, setValidated] = useState(false);
  //eslint-disable-next-line
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <CCard>
      <CCardHeader> Adicionar Classe </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow>
            <CCol md="6">
              <CLabel htmlForm="name">Classe</CLabel>
              <CInput name="classe" id="classe" placeholder="CLasse" />
            </CCol>
            <CCol md="6">
              <CLabel htmlForm="date-nasc">O responsável</CLabel>
              <CInput
                type="text"
                name="responsavel"
                id="responsavel"
                placeholder="O Responsável da classe"
              />
            </CCol>
          </CRow>
          <br />
          <CRow>
            <CCol md="6">
              <CLabel htmlFor="pr"> Preço da Confirmação </CLabel>
              <CInput
                type="number"
                name="precoconfirm"
                id="pr"
                placeholder="Ex: 22.500Kzs"
              />
            </CCol>
            <CCol md="6">
              <CLabel htmlFor="address"> Preço da Matrícula </CLabel>
              <CInput
                type="number"
                name="precomatricula"
                id="pm"
                placeholder="Ex: 30.500Kzs"
              />
            </CCol>
          </CRow>
          <br />
          <CRow>
            <CCol md="6">
              <CLabel htmlFor="dadosconfirm">
                {" "}
                Dados Necessários Confirm{" "}
              </CLabel>
              <CTextarea
                name="dadosconfirm"
                id="dadosconfirm"
                placeholder="Ex: Bi, Copia do Certificado, 3 fotos, 12 mil..."
              />
            </CCol>
            <CCol md="6">
              <CLabel htmlFor="dadosconfirm">
                {" "}
                Dados Necessários Matrícula{" "}
              </CLabel>
              <CTextarea
                name="dadosmatricula"
                id="dadosmatricula"
                placeholder="Ex: Bi, Copia do Certificado, 3 fotos, 12 mil..."
              />
            </CCol>
          </CRow>
          <br />
          <CRow>
            <CCol>
              <CButton color="primary" type="submit">
                Adicionar Classe
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
}

export default AddClasse;
