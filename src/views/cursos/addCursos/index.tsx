import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CInput,
  CLabel,
  CCol,
  CRow,
  CTextarea,
  CButton,
} from "@coreui/react";

const AddCursos = () => {
  return (
    <>
      <CCard>
        <CCardHeader> Adicionar Curso </CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol md="6">
                <CLabel htmlFor="nameCurso"> Nome do Curso </CLabel>
                <CInput
                  id="nameCurso"
                  name="nameCurso"
                  placeholder="Ex: Ciências Fisicas e Biológicas"
                />
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="coordCurso"> Coordenador do Curso </CLabel>
                <CInput
                  name="coordCurso"
                  id="coordCurso"
                  placeholder="Ex: Jonh Doe"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="12">
                <CLabel htmlFor="DescCurso"> Descrição do Curso </CLabel>
                <CTextarea
                  placeholder="Ex: Um Curso que faz isso, com isso, aquilo e tudo mais.!"
                  name="DescCurso"
                  id="DescCurso"
                  rows={4}
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="12">
                <CButton type="submit" color="primary">
                  Adicionar Curso
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default AddCursos;
