import React from "react";
import {
  CCol,
  CCard,
  CInput,
  CFormGroup,
  CButton,
  CCardHeader,
  CLabel,
  CRow,
  CCardBody,
  CInputGroup,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

function Pagamentos() {
  return (
    <>
      <CCard>
        <CCardHeader>Novo Pagamento</CCardHeader>

        <CCardBody>
          <CFormGroup>
            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="number">Nº da Matrícula</CLabel>
                  <CInput id="number" required />
                </CFormGroup>
              </CCol>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="nome">Nome</CLabel>
                  <CInput id="nome" required />
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="select">Curso</CLabel>
                  <CSelect name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Informática</option>
                    <option value="2">Química</option>
                    <option value="3">Mecanica</option>
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="select">Turma</CLabel>
                  <CSelect name="select" id="class">
                    <option value="0">Please select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="select">Época</CLabel>
                  <CSelect name="select" id="quarters">
                    <option value="0">Please select</option>
                    <option value="1">1º Trimestre</option>
                    <option value="2">2º Trimestre</option>
                    <option value="3">3º Trimestre</option>
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="select">Mes a pagar</CLabel>
                  <CSelect name="select" id="months">
                    <option value="0">Please select</option>
                    <option value="1">Janeiro</option>
                    <option value="2">Fevereiro</option>
                    <option value="3">Março</option>
                    <option value="4">Abril</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="multa">Multa</CLabel>
                  <CInputGroup>
                    <CInput id="number" required />
                    <CInputGroupText id="inputGroupPrepend">%</CInputGroupText>
                  </CInputGroup>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="multa">Desconto</CLabel>
                  <CInputGroup>
                    <CInput id="multa" required />
                    <CInputGroupText id="inputGroupPrepend">%</CInputGroupText>
                  </CInputGroup>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="data do pagamento">Data Do Pagamento</CLabel>
                  <CInput type="date" id="date" required />
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="street">Modo de Pagamento</CLabel>
                  <CSelect name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Cash</option>
                    <option value="2">Outro...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="street">Selecione o Banco</CLabel>
                  <CSelect name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">BAI</option>
                    <option value="2">BIC</option>
                    <option value="3">BPC</option>
                    <option value="4">MILENIUM</option>
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="transacao nº">Transaçao Nº</CLabel>
                  <CInput type="number" id="number" required />
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol md="6">
                <CFormGroup>
                  <CLabel htmlFor="ano lectivo">Valor</CLabel>
                  <CInput id="number" defaultValue="10000" required readOnly />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CButton block color="primary">
                  Gravar
                </CButton>
              </CCol>

              <CCol>
                <CButton block color="primary">
                  Gravar e Imprimir
                </CButton>
              </CCol>
            </CRow>
          </CFormGroup>
        </CCardBody>
      </CCard>
    </>
  );
}

export default Pagamentos;
