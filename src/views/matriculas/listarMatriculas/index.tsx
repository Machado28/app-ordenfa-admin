import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { matriculaTableFields } from "./tableSettins/fields";

const Matricula = () => {
  return (
    <>
      <PSTable
        title="Matrículas efectuadas"
        data={dataTable}
        fields={matriculaTableFields}
        linkAddNewRow="/matricula/add"
        
      />
    </>
  );
};

export default Matricula;
