import React, { useState } from "react";
import * as Style from "./style";
import { motion, AnimatePresence } from "framer-motion";
import Foto from "../../assets/images/SALIAS1.png";
import { CInput, CLabel, CRow, CCol, CSelect, CFormGroup } from "@coreui/react";

const IncricaoOnline = () => {
  const [open, setopen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <Style.ContainerGeral>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            onClick={() => setopen(false)}
            className="Geral"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0 }}
            className="Modal"
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.3 },
              }}
              exit={{ x: 100, opacity: 0 }}
            >
              <Style.TitleModal>Prencha os Campos</Style.TitleModal>
            </motion.div>
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.3 },
              }}
              exit={{ x: -100, opacity: 0 }}
              className="CorpoModal"
            >
              <CRow>
                <CCol md="6">
                  <CLabel>Full Name</CLabel>
                  <CInput name="name" id="name" placeholder="Name" />
                </CCol>
                <CCol md="6">
                  <CLabel>Data de Nascimento</CLabel>
                  <CInput
                    type="date"
                    name="date-nasc"
                    id="date-nasc"
                    placeholder="Data deNascimento"
                  />
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol md="6">
                  <CLabel htmlFor="bi">Bi Number</CLabel>
                  <CInput
                    type="text"
                    name="bi"
                    id="bi"
                    placeholder="Bi Number"
                  />
                </CCol>
                <CCol md="6">
                  <CLabel htmlFor="address"> Endereço </CLabel>
                  <CInput
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Ex: Angola Luanda, Sambizanga Casa S/N"
                  />
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol md="3">
                  <CLabel>Género</CLabel>
                  <CSelect name="gender" id="gender">
                    <option value="null">Selecione o Género</option>
                    <option value="masculino"> Masculino </option>
                    <option value="femenino"> Femenino </option>
                    <option value="outro"> Outro </option>
                  </CSelect>
                </CCol>
                <CCol md="6">
                  <CLabel>Curso</CLabel>
                  <CSelect name="curso" id="curso">
                    <option value="null">Selecione o Curso</option>
                    <option value="CFB">Ciência Físicas e Biológicas</option>
                    <option value="CFJ">Ciência Económicas e Jurídicas</option>
                    <option value="MP"> Magitério Primário </option>
                    <option value="EI"> Educador de Infância </option>
                  </CSelect>
                </CCol>
                <CCol md="3">
                  <CLabel>Classe</CLabel>
                  <CSelect name="classe" id="classe">
                    <option value="null">Selecione o Classe</option>
                    <option value="10ª"> 10ª Décima </option>
                    <option value="11ª"> 11ª Décima Primeira </option>
                    <option value="12ª"> 12ª Décima Segunda </option>
                    <option value="13ª"> 13ª Décima Terceira </option>
                  </CSelect>
                </CCol>
              </CRow>
            </motion.div>
          </motion.div>
        </Style.ContainerGeral>
      )}
      <Style.CorpoDetras>
        <motion.div className="TextTras">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            exit={{ x: 100, opacity: 0 }}
          >
            <Style.TitleTras>
              Bem Vindo a Plataforma de Inscrição Online
            </Style.TitleTras>
          </motion.h1>
          <motion.form className="FormInputEmail">
            <CCol>
              <CLabel>Informe o seu E-mail</CLabel>
              <CInput name="email" id="emal" placeholder="E-mail" />
            </CCol>

            <CCol>
              <CLabel>Escolha a escola</CLabel>
              <CSelect name="curso" id="curso">
                <option value="null">Makarenco IPIL</option>
                <option value="CFB">IMEL</option>
                <option value="CFJ">IPTEL</option>
                <option value="MP"> Magitério Primário </option>
                <option value="EI"> Educador de Infância </option>
              </CSelect>
            </CCol>

            <button onClick={() => setopen(true)}>Seguinte</button>
          </motion.form>
        </motion.div>
        <motion.div className="FotoTras">
          <img src={Foto} />
        </motion.div>
      </Style.CorpoDetras>
    </AnimatePresence>
  );
};
export default IncricaoOnline;
