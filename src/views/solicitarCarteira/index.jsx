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


function SolicitarCarteira() {
    return (
        <>
            <CCard>
                <CCardHeader> Formulário de Solicitação De Carteira </CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow>
                            <CCol md="6">
                                
                            <CLabel> VIA </CLabel>
                                <CSelect custom name="via" id="via">
                                    <option value="null">1</option>
                                    <option value="CFB">2</option>
                                    <br /><br />
                                </CSelect>
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
                                <br />
                                <CLabel htmlFor="certificado">Certificado ou Declaração (12ª classe)</CLabel>
                                <CInput type="file" name="certificado" id="certificado" />
                            </CCol>
                            <br />
                            
                            <CCol md="6">
                                <br />
                                <CLabel htmlFor="certificado">Foto tipo passe (fundo braco)</CLabel>
                                <CInput type="file" name="certificado" id="certificado" />
                            </CCol>
                            
                            <CCol md="6">
                                <br />
                                
                                <CLabel htmlFor="certificado">declaração de
                                    Reconhecimento de Estudo/Homologação
                                    (INAAREES) </CLabel>
                                <CInput type="file" name="certificado" id="certificado" />
                            </CCol>

                            <CCol md="6">
                                <br />

                                <CLabel htmlFor="docident"> Documento de Identificação </CLabel>
                                <CInput type="file" name="docident" id="docident" />
                            </CCol>
                            <br />
                            <CCol md="6">
                                <CLabel htmlFor="docident"> Comprovativo de Quotas de desde  Janeiro de 2015 </CLabel>
                                <CInput type="file" name="docident" id="docident" />
                            </CCol>
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

export default SolicitarCarteira;
