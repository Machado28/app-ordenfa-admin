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
import useAuth from "src/hooks/useAuth";
import Redirect from "src/util/redirect";


const Logout=  ()=> {
 (function Out (){
  const {signout} = useAuth()

  signout()
  Redirect('login')
 })()
   
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
       
    </div>
  );
};

export default Logout;
