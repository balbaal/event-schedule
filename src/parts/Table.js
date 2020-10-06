import React from "react";
import { MDBDataTable } from "mdbreact";

const Table = ({ data }) => {
  return <MDBDataTable entries={5} entriesOptions={[5, 10, 15, 20, 25]} striped bordered hover data={data} />;
};

export default Table;
