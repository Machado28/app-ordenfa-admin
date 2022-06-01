import React from "react";
import { PSTable } from "src/shared/components/Table/index";
import { dataTable } from "./tableSettings/dataTable";
import { classesTableFields } from "./tableSettings/fields";

const ListarClasses = () => {
  return (
    <>
      <PSTable
        title="Classes"
        data={dataTable}
        fields={classesTableFields}
        linkAddNewRow="/classes/add"
      />
    </>
  );
};

export default ListarClasses;
