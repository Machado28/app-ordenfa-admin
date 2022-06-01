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
import { TableProps } from "./types";

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

const PSTable: FC<TableProps> = ({
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
        <CCardHeader>Dados de Pesquisa</CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol xs="4">
                <CLabel htmlFor="selectSm">Filtrar por</CLabel>
                <CSelect
                  name="selectSm"
                  id="SelectLm"
                  onChange={(e) => console.log(e)}
                >
                  <option value="null">Please select</option>
                  {fields?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                  /
                </CSelect>
              </CCol>
              <CCol xs="">
                <CLabel htmlFor="pesq">Pesquisar</CLabel>
                <CForm inline>
                  <CInput
                    className="mr-sm-2"
                    placeholder="Search"
                    id="pesq"
                    style={{ width: "80%" }}
                    onChange={searchBy}
                  />
                  <CButton
                    color="outline-info"
                    className="my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </CButton>
                </CForm>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol>
          <CCard>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CCardHeader>
                <strong>{title.toLocaleUpperCase()}</strong>
              </CCardHeader>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 10px",
                }}
              >
                <CButton color="warning" variant="outline" size="sm">
                  Refresh
                </CButton>
                <Link to={linkAddNewRow || ""}>
                  <CButton
                    color="info"
                    variant="outline"
                    size="sm"
                    className="ml-2"
                  >
                    Adicionar Novo
                  </CButton>
                </Link>
              </div>
            </div>
            <CCardBody>
              <CDataTable
                items={filteredData}
                fields={fields}
                // bordered
                dark={dark}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item: any) =>
                    item?.status && (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item?.status}
                        </CBadge>
                      </td>
                    ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export { PSTable };
