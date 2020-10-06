import React from "react";
import { MDBDataTable } from "mdbreact";

const Table = ({ data }) => {
  return <MDBDataTable striped bordered hover data={data} />;
};

export default Table;
