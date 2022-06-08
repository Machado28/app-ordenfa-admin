import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { TipoDeActualizacaoTableFields } from "./tableSettins/fields";

const ListTipoDeActualizacao = () => {
  return (
    <>
      <PSTable
        title="TipoDeActualistarTipoDeActualizacaos"
        data={dataTable}
        fields={TipoDeActualizacaoTableFields}
        linkAddNewRow="/tipo/actualizacao/add"
      />
    </>
  );
};

export default ListTipoDeActualizacao;
