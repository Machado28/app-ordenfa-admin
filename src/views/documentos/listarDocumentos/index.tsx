import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { DocumentoTableFields } from "./tableSettins/fields";

const ListarDocumento = () => {
  return (
    <>
      <PSTable
        title="Documentos"
        data={dataTable}
        fields={DocumentoTableFields}
        linkAddNewRow="/documentos/add"
      />
    </>
  );
};

export default ListarDocumento;
