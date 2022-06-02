import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { GrauTableFields } from "./tableSettins/fields";

const ListarGrau = () => {
  return (
    <>
      <PSTable
        title="Graus"
        data={dataTable}
        fields={GrauTableFields}
        linkAddNewRow="/graus/add"
      />
    </>
  );
};

export default ListarGrau;
