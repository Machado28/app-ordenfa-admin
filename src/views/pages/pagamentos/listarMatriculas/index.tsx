import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { matriculaTableFields } from "./tableSettins/fields";

const Matricula = () => {
  return (
    <>
      <PSTable
        title="Pagamentos Efetuados"
        data={dataTable}
        fields={matriculaTableFields}
        linkAddNewRow="/pagamentos"
      />
    </>
  );
};

export default Matricula;
