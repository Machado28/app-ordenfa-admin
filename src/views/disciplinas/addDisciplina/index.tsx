import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CCardFooter,
  CButton,
} from "@coreui/react";
import { Input } from "src/shared/components/Forms/Input";

function AddDisciplina() {
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>Disciplina</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12">
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                  <CInput
                    id="ccnumber"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <Input
                    type="select"
                    name="ccmonth"
                    label="Month"
                    data={[
                      { label: "1", value: "1" },
                      { label: "2", value: "2" },
                    ]}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccyear">Year</CLabel>
                  <CSelect name="ccyear" id="ccyear">
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                  <CInput id="cvv" placeholder="123" required />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="md" color="primary" className="mr-2">
              Submit
            </CButton>
            <CButton type="reset" size="md" color="danger">
              Reset
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default AddDisciplina;
