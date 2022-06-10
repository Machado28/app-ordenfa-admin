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
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "rsuite";
import useAuth from "src/hooks/useAuth";


const Login=  ()=> {
  const [userEmail,setUserEmail]=useState('')
  const [userPassword,setUserPassword]=useState('')
  const [messageError,setMessageError]=useState('')

  const {signin} = useAuth()

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">faça login e tenha privilégios</p>
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
                        onChange={(e)=>[setUserEmail(e.target.value), setMessageError('')]}
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
                      />
                       
                    </CInputGroup>
                    <CLabel color="danger"  className="px-1">
                        {messageError}
                        </CLabel>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">
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
