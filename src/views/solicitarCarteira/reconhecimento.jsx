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


function Reconhecimento() {
    return (
        <>
            <CCard>
                <CCardHeader> Formulário de Reconhecimento de Carteira Profissional </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow>
                            <CCol md="6">
                                <CLabel> Curso </CLabel>
                                <CSelect custom name="curso" id="curso">
                                    <option value="null">Selecione o Curso</option>
                                    <option value="CFB">Técnoco de Enfermagem</option>
                                    <option value="CFJ">Análises Clínica</option>
                                    <option value="MP"> Fisoteraputa </option>
                                    <option value="EI"> Cardiologia </option>
                                </CSelect>
                            </CCol>
                            
                            <br />
                            <br />
                            <CCol md="6">
                                <CLabel> Documento de identificação </CLabel>
                                <CSelect custom name="gender" id="gender">
                                    <option value="null">Selecione o Dcumento</option>
                                    <option value="masculino"> Passaporte estrangeiro(a) </option>
                                    <option value="femenino"> Bilhete de identidade </option>
                                </CSelect>
                            </CCol>
                            <br />
                            <br />
                            <CCol md="6">
                                <CLabel htmlFor="bi">Nº do documento de Identificação</CLabel>
                                <CInput type="text" name="bi" id="bi" placeholder="Nº" />
                            </CCol>
                            <br />
                            <br />
                            <CCol md="6">
                                <CLabel htmlFor="bi">Nº da Carteira Profissional</CLabel>
                                <CInput type="text" name="bi" id="bi" placeholder="Nº" />
                            </CCol>
                            <br /><br />
                            <CCol md="6">
                                <br />
                                <CLabel htmlFor="certificado">Certificado ou Declaração (Curso)</CLabel>
                                <CInput type="file" name="certificado" id="certificado" />
                            </CCol>
                            <br />

                            
                            <br />
                            
                        </CRow>
                        <br />
                        <br />

                        <CRow>
                            <CCol md="6">

                                <CLabel htmlFor="certificado">Pagamento Via Multicaixa EXPRESS</CLabel>
                                <CInput type="numer" name="telefoneExpress" id="telefoneExpress" placeholder="Telefone Express" />
                            </CCol>
                            <CCol md="6">
                                <CLabel htmlFor="docident"> - </CLabel>
                                <CInput type="number" name="docident" id="codigoExpress" placeholder="Código" />

                            </CCol>
                        </CRow>
                        <br />
                        <br />
                        <CRow>
                            <CCol>
                                <CButton color="primary" type="submit">
                                    Solicitar
                                </CButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    );
}

export default Reconhecimento;
