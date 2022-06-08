import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CForm,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { TableProps } from "../../shared/components/Table/types";

const getBadge = (status: string) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const PesquisarPerfil: FC<TableProps> = ({
  data = [],
  fields = [],
  title = "Tabela",
  dark,
  linkAddNewRow,
}) => {
  const [filteredData, setFilteredData] = useState(data);
  //eslint-disable-next-line
  const [filterBy, setFilterBy] = useState("");

  const searchBy = (e: any) => {
    const { value } = e.target;
    const newData = data?.filter(
      (item, index) =>
        String(item[filterBy])
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) > -1
    );
    setFilteredData(newData);
  };

  return (
    <>
      <CCard>
        <CCardHeader>Encontrar meu Perfil</CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol xs="4">
                <CLabel htmlFor="selectSm">Número de Identificação</CLabel>
                <CInput
                    className="mr-sm-2"
                    placeholder="Search"
                    id="pesq"
                    style={{ width: "80%" }}
                    onChange={searchBy}
                  />
              </CCol>
              <CCol xs="">
                <CLabel htmlFor="pesq">Código da Carteira</CLabel>
                <CForm inline>
                  <CInput
                    className="mr-sm-2"
                    placeholder="Search"
                    id="carteiraCod"
                    style={{ width: "80%" }}
                    onChange={searchBy}
                    type='text'
                  />
                  <CButton
                    color="outline-info"
                    className="my-2 my-sm-0"
                    type="submit"
                  >
                    Encontrar
                  </CButton>
                </CForm>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
 
    </>
  );
};

export { PesquisarPerfil };
