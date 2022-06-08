import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { TipoDeViaTableFields } from "./tableSettins/fields";

const ListarTipoVia = () => {
  return (
    <>
      <PSTable
        title="TipoVias"
        data={dataTable}
        fields={TipoDeViaTableFields}
        linkAddNewRow="/TipoVias/add"
      />
    </>
  );
};

export default ListarTipoVia;
