import React from "react";
import { dataTable } from "./tableSettings/datatable";
import { fields } from "./tableSettings/fields";
import { PSTable } from "src/shared/components/Table";

const ListCargo = () => {
  return (
    <>
      <PSTable
        title="Cargo"
        data={dataTable}
        fields={fields}
        linkAddNewRow="/cargo/add"
      />
    </>
  );
};

export default ListCargo;
