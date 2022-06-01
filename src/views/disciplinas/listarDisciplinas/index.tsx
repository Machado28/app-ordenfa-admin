import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { disciplinaTableFields } from "./tableSettins/fields";

const Disciplina = () => {
  return (
    <>
      <PSTable
        title="Disciplinas"
        data={dataTable}
        fields={disciplinaTableFields}
        linkAddNewRow="/matricula/add"
      />
    </>
  );
};

export default Disciplina;
