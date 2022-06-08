import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React from "react";

function AddTipoDeActualizacao() {
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>Adicionar tipo de tipo actualizacao  Identificação</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="descricao">Nome do Tipo de Actualizacao</CLabel>
                  <CInput id="desicricao" required />
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="designacao">AbreAAddTipoActualizacaoção</CLabel>
                  <CInput id="designacao" required />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardFooter>
            <CButton type="submit" size="md" color="primary" className="mr-2">
              + Add More
            </CButton>
            <CButton type="reset" size="md" color="danger" className="mr-2">
              - Remove Last
            </CButton>

            <CButton type="reset" size="md" color="info">
              Guardar
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default AddTipoDeActualizacao;
