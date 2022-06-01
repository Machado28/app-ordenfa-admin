import React from "react";
import { dataTable } from "./tableSettings/datatable";
import { fields } from "./tableSettings/fields";
import { PSTable } from "src/shared/components/Table";

const ListarCursos = () => {
  return (
    <>
      <PSTable
        title="Cursos"
        data={dataTable}
        fields={fields}
        linkAddNewRow="/cursos/add"
      />
    </>
  );
};

export default ListarCursos;
