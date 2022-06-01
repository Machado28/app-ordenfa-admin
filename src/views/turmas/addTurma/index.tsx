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

function AddTurma() {
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>Adicionar Turmas</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="ccurso">Curso</CLabel>
                  <CSelect name="ccurso" id="ccyear">
                    <option>Ciencias Físicas e Biológicas</option>
                    <option>Informática</option>
                    <option>Química</option>
                    <option>Eletricidade</option>
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="cnivel">Nivel Académico</CLabel>
                  <CSelect name="cnivel" id="cnivel">
                    <option>7ª Classe</option>
                    <option>8ª Classe</option>
                    <option>9ª Classe</option>
                    <option>10ª Classe</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="cnivel">Época</CLabel>
                  <CSelect name="cnivel" id="cnivel">
                    <option>1º Trimestre</option>
                    <option>2º Trimestre</option>
                    <option>3º Trimestre</option>
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="ccodigo">Código</CLabel>
                  <CInput id="ccodigo" required />
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="cname">Nome da Turma</CLabel>
                  <CInput id="name" required />
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Professor Responsável</CLabel>
                  <CSelect name="name" id="name">
                    <option>Goreth Manuel</option>
                    <option>Mário Varela</option>
                    <option>Ernesto Salias</option>
                    <option>Lúcio José</option>
                    <option>Luíz Mendes</option>
                    <option>António Machado</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="cdate">Data de Início</CLabel>
                  <CInput type="date" id="date" required />
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="cdate">Data do Fim</CLabel>
                  <CInput type="date" id="date" required />
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="1">
                <CFormGroup>
                  <CLabel>Turno:</CLabel>
                </CFormGroup>
              </CCol>

              <CCol xs="1">
                <CInputRadio
                  className="form-check-input"
                  id="radio1"
                  name="radios"
                  value="manha"
                />
                <CLabel variant="checkbox" htmlFor="radio1">
                  Manha
                </CLabel>
              </CCol>

              <CCol xs="1">
                <CInputRadio
                  className="form-check-input"
                  id="radio2"
                  name="radios"
                  value="tarde"
                />
                <CLabel variant="checkbox" htmlFor="radio2">
                  Tarde
                </CLabel>
              </CCol>

              <CCol xs="1">
                <CInputRadio
                  className="form-check-input"
                  id="radio3"
                  name="radios"
                  value="noite"
                />
                <CLabel variant="checkbox" htmlFor="radio3">
                  Noite
                </CLabel>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>Inserir Disciplinas e Professores da Turma</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Disciplinas</CLabel>
                  <CSelect name="name" id="name">
                    <option>Matemática</option>
                    <option>Lingua Portuguesa</option>
                    <option>Estudo do Meio</option>
                    <option>Geografia</option>
                    <option>Educaçao Manual e Plástica</option>
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Professor</CLabel>
                  <CSelect name="name" id="name">
                    <option>Goreth Manuel</option>
                    <option>Mário Varela</option>
                    <option>Ernesto Salias</option>
                    <option>Lúcio José</option>
                    <option>Luíz Mendes</option>
                    <option>António Machado</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>Informaçoes Financeiras</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cname">Inscriçao</CLabel>
                  <CInput id="name" placeholder="0.00" required />
                </CFormGroup>
              </CCol>

              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cname">Mensalidade</CLabel>
                  <CInput id="name" placeholder="0.00" required />
                </CFormGroup>
              </CCol>

              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cname">Parcelas Mensais</CLabel>
                  <CInput id="name" placeholder="Months" required />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>

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

export default AddTurma;
