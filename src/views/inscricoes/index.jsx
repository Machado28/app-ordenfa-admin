import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import {uuid  }from 'uuidv4'
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
import array from "./array";


function Incricoes() {
  const [name, setname] = useState('');
    const [age, setage] = useState('');
  
    // Using useNavigation for redirecting to pages
    let history = useHistory();
  
    // Function for creating a post/entry
    const handelSubmit = (e) =>{
        e.preventDefault();  // Prevent reload
  
        const ids = uuid() // Creating unique id
        let uni = ids.slice(0,8) // Slicing unique id
  
        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = name, b=age
        array.push({id:uni,Name:a,Age:b})
  
  
       // Redirecting to home page after creation done
       history('/')
      }
  return (
    <>
      <CCard>
        <CCardHeader> Formulário de Inscrição </CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol md="6">
                <CLabel htmlForm="name">Nome Completo</CLabel>
                <CInput name="name" id="name" placeholder="Name" />
              </CCol>
              <CCol md="6">
                <CLabel htmlForm="date-nasc">Data de nascimento</CLabel>
                <CInput
                  type="date"
                  name="date-nasc"
                  id="date-nasc"
                  placeholder="Data de Nascimento"
                  required
                />
              </CCol>
              <CCol md="6">
                <CLabel htmlForm="naturalidade">Naturalidae</CLabel>
                <CInput
                  type="text"
                  name="naturalidade"
                  id="naturalidade"
                  placeholder="Naturalidade"
                  required
                />
              </CCol>
              <CCol md="6">
                <CLabel htmlForm="bairro">Bairro</CLabel>
                <CInput
                  type="text"
                  name="bairro"
                  id="bairro"
                  placeholder="bairro"
                  required
                />
              </CCol>
              <CCol md="6">
                <CLabel htmlForm="Nacionalidade">Nacionalidade</CLabel>
                <CInput
                  type="text"
                  name="nacionalidade"
                  id="nacionalidade"
                  placeholder="Nacionalidade"
                  required
                />
              </CCol>


              <CCol md="6">
                <CLabel htmlForm="Comuna">Comuna</CLabel>
                <CInput
                  type="text"
                  name="Comuna"
                  id="Comuna"
                  placeholder="Comuna"
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md="4">
                <CLabel> Documento de identificação </CLabel>
                <CSelect custom name="gender" id="gender">
                  <option value="null">Selecione o Dcumento</option>
                  <option value="masculino"> Passaporte </option>
                  <option value="femenino"> Bilhete de identidade </option>

                </CSelect>
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="bi">Nº do documento de Identificação</CLabel>
                <CInput type="text" name="bi" id="bi" placeholder="Nº" />
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="passadoPor">Passado Por</CLabel>
                <CInput type="text" name="passadoPor" id="PassadoPor" placeholder="Onde tratou?" />
              </CCol>
              <CCol md="6">
                <CLabel htmlFor="dataDeEmissao">Data de Emissão</CLabel>
                <CInput type="date" name="dataDeEmissao" id="dataDeEmissao"  />
              </CCol>
              <CCol md="6">
              <CLabel htmlFor="dataDeExpiracao">Data de Expiração</CLabel>
              <CInput type="date" name="dataDeExpiração" id="dataDeExpiração"   />
            </CCol>
            </CRow>
            <br></br>
            <br></br>
            <CRow>
              <CCol md="6">
                <CLabel htmlFor="address"> Endereço Actual </CLabel>
                <CInput
                  type="text"
                  name="rua"
                  id="ruaActual"
                  placeholder="Rua"
                />
                <CInput
                  type="text"
                  name="casa"
                  id="casa"
                  placeholder="casa/Apartamento Nº"
                />
                <CInput
                  type="text"
                  name="bairro"
                  id="bairroActual"
                  placeholder="Bairro"
                />
                <CInput
                  type="text"
                  name="comuna"
                  id="comunaActual"
                  placeholder="Comuna/Distrito Urbano"
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
                  <option value="CFB">Técnoco de Enfermagem</option>
                  <option value="CFJ">Análises Clínica</option>
                  <option value="MP"> Fisoteraputa </option>
                  <option value="EI"> Cardiologia </option>
                </CSelect>
              </CCol>
              <CCol md="4">
                <CLabel>Nível</CLabel>
                <CSelect custom name="classe" id="classe">
                  <option value="null">Selecione a Classe</option>
                  <option value="10ª">Ensino Médio</option>
                  <option value="11ª"> LicençiadoPrimeira </option>
                  <option value="12ª"> Mestrado</option>
                  <option value="13ª"> Doturado</option>
                  <option value="13ª">Curso profissional</option>
                </CSelect>
              </CCol>
            </CRow>
            <br />
            <br></br>
            <CRow>
            <CCol md="6">
              <CLabel htmlFor="address"> Escola do Primerio Cíclo </CLabel>
              <CInput
                type="text"
                name="escolaP"
                id="escolaP"
                placeholder="Nome:"
              />
              <CInput
                type="number"
                name="anoP"
                id="anoP"
                placeholder="data"
              />
              <CInput
                type="text"
                name="bairro"
                id="bairroP"
                placeholder="Bairro"
              />
            </CCol>
          </CRow>
          <br />
          <br />
          <CRow>
              <CCol md="6">
                <CLabel htmlFor="address"> Escola onde Fez o Curso </CLabel>
                <CInput
                  type="text"
                  name="nomeM"
                  id="ruaActual"
                  placeholder="Nome"
                />
                <CInput
                  type="text"
                  name="anoM"
                  id="anoM"
                  placeholder="ano"
                />
                <CInput
                  type="text"
                  name="bairro"
                  id="bairroActual"
                  placeholder="Bairro"
                />
                <CInput
                  type="text"
                  name="comuna"
                  id="comunaActual"
                  placeholder="Comuna/Distrito Urbano"
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
