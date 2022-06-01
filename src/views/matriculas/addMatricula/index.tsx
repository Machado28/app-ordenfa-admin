import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFade,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CInputRadio,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React from "react";

const FormsMatricula = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  //eslint-disable-next-line
  const [showElements, setShowElements] = React.useState(true);

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                Todos os campos com * são obrigatórios
                <div className="card-header-actions">
                  <CButton
                    color="link"
                    className="card-header-action btn-setting"
                  >
                    <CIcon name="cil-settings" />
                  </CButton>
                  <CButton
                    color="link"
                    className="card-header-action btn-minimize"
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <CIcon
                      name={collapsed ? "cil-arrow-top" : "cil-arrow-bottom"}
                    />
                  </CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="disabled-input">
                        Número de Matricula
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="disabled-input"
                        name="disabled-input"
                        placeholder="00001"
                        disabled
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Nome Completo</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="name"
                        placeholder="Insire o nome do aluno"
                        required
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="date-input">Data de Nascimento</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="Data do aluno"
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">
                        Informe o tipo de Matricula
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CSelect name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Tipo #1</option>
                        <option value="2">Tipo #2</option>
                        <option value="3">Tipo #3</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Sexo</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Masculino
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio2"
                          name="inline-radios"
                          value="option2"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio2"
                        >
                          Femenino
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Foto</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInputFile
                        id="file-multiple-input"
                        name="file-multiple-input"
                        multiple
                        custom
                      />
                      <CLabel
                        htmlFor="file-multiple-input"
                        variant="custom-file"
                      >
                        Insire a foto do aluno...
                      </CLabel>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> Matricular
                </CButton>
              </CCardFooter>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  );
};

export default FormsMatricula;
