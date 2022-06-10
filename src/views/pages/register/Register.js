import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { useState } from "react";
 
import { ErrorMessage } from "rsuite";
import useAuth from "src/hooks/useAuth";
import Redirect from "src/util/redirect";

function Register ()  {
  const {signup}=useAuth()

  const [userEmail,setUserEmail]=useState("")
  const [userFullName,setUserFullName]=useState("")
  const [userPassword,setUserPassword]=useState("")
  const [userConfirmPassword,setUserConfirmPassword]=useState("")
  const [messageError,setMessageError]=useState("")

  
  const HandleEmail =(e)=>{
    setMessageError('')
   setUserEmail(e.target.value)
   
  }
  const HandleFullName =(e)=>{
    setMessageError('')
    setUserFullName(e.target.value)
   
  }
  const HandlePass =(e)=>{
    setMessageError('')
    setUserPassword(e.target.value)
   
   }
   const HandleConfirmPass =(e)=>{
    setMessageError('')
    setUserConfirmPassword(e.target.value)
   
   }
 const handleRegister =()=>{
   if (!userEmail| !userPassword | !userConfirmPassword){
     setMessageError('preecha todos os campos!')
     return
   }
   if (userPassword !== userConfirmPassword){
     setMessageError('As as devem ser iguais!')
     return
   }

   const res= signup(userFullName,userEmail,userConfirmPassword)
   if(res){
  
   setMessageError(res)
   return ;}
   const host= window.location.origin

   const path='login'
  
   
  return Redirect(path)
   }
 
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Crie conta na ORDENA</h1>
                    <p className="text-muted">cria conta na ordenfa e tenha beneficios</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Nome Completo"
                        autoComplete="current-name"
                        onChange={HandleFullName}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="E-mail"
                        autoComplete="username"
                        onChange={HandleEmail}
                      />
                   
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={HandlePass}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Comfirmar Senha"
                        autoComplete="current-name"
                        onChange={HandleConfirmPass}
                      />
                      
                    </CInputGroup>
                     <CLabel> {messageError}</CLabel>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={handleRegister} color="primary" className="px-4">
                          Criar Conta
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" to={'/login'} className="px-0">
                          ja tem uma conte?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
