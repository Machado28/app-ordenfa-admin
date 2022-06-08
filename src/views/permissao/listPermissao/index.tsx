import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettins/dataTable";
import { PermissaoTableFields } from "./tableSettins/fields";

const ListPermissao = () => {
  return (
    <>
      <PSTable
        title="Listar Permissoes"
        data={dataTable}
        fields={PermissaoTableFields}
        linkAddNewRow="/permissao/add"
      />
    </>
  );
};

export default ListPermissao;
