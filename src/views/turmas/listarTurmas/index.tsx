import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { turmaTableFields } from "./tableSettins/fields";

const Turma = () => {
  return (
    <>
      <PSTable
        title="Turmas"
        data={dataTable}
        fields={turmaTableFields}
        linkAddNewRow="/turma/add"
      />
    </>
  );
};

export default Turma;
