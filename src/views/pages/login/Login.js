import CIcon from "@coreui/icons-react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
 
 
import useAuth from "src/hooks/useAuth";
import Redirect from "src/util/redirect";


const Login=  ()=> {
  const {signin}=useAuth()

  const [userEmail,setUserEmail]=useState("")
  const [userPassword,setUserPassword]=useState("")
  const [messageError,setMessageError]=useState("")

  
  const HandleEmail =(e)=>{
    setMessageError('')
   setUserEmail(e.target.value)
   
  }
  const HandlePass =(e)=>{
    setMessageError('')
    setUserPassword(e.target.value)
   
   }
 const handleLogin =()=>{
   if (!userEmail| !userPassword){
     setMessageError('preecha todos os campos!')
     return
   }

   const res= signin(userEmail,userPassword)
   if(res){
   return setMessageError(res)

   }
   
  return Redirect('dashboard')
 } 
 
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Faça login e obtena privilegios</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="E-mail ou número de telemovel"
                        autoComplete="username"
                        onChange={HandleEmail }
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
                    <CLabel color="danger"  className="px-1">
                       {messageError}
                        </CLabel>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={handleLogin} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" to={'/recovery'} className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                    <CCol xs="6" className="text-right">
                        <CButton color="link" to={'/register'} className="px-0">
                         Não tenho uma conta
                        </CButton>
                      </CCol>
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

export default Login;
