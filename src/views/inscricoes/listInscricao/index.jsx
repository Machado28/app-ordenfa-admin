import CIcon from "@coreui/icons-react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
} from "@coreui/react";
import React, { lazy } from "react";
import MainChartExample from "../../charts/MainChartExample";

const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../../widgets/WidgetsBrand.js"));

const ListMembros = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Inscrever {" & "} - se</CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <CIcon name="cil-people" />
                    </th>
                    <th>Usuario</th>
                    <th></th>
                    <th>--------------------------------------------------------</th>
                    <th className="text-center">Curso</th>
                     
                    <th></th> <th></th> <th></th>
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                  <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/1.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Antonio Machado</div>
                      <div className="small text-muted">
                        Jan 1, 2015  06:00
                      </div>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <span>
                      Analises Clinicas
                    </span>

                  </tr>


                  <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/1.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Aurora Da Silva</div>
                      <div className="small text-muted">
                        Jan 1, 2015  06:00
                      </div>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <span>
                      Analises Clinicas
                    </span>

                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ListMembros;
