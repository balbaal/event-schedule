import React, { useState, useEffect, useMemo } from "react";
import { axios } from "configs";
import { useTable } from "react-table";
import { Input } from "elements";
import { Table } from "parts";

// Components
import { Navbar } from "parts";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    const resData = await axios.get("/event");
    setEvents(resData.data);
  };

  useEffect(() => {
    fetchData();
  }, [events]);

  const data = useMemo(() => events, [events]);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "date", // accessor is the "key" in the data
      },
      {
        Header: "Participant",
        accessor: "participant",
      },
      {
        Header: "Note",
        accessor: "note",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <Navbar />

      <div className="container mt-3">
        <Input
          type="text"
          name="filter"
          placeholder="Search . . ."
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="w-50"
        />
        <Table
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          rows={rows}
          prepareRow={prepareRow}
        />
      </div>
    </div>
  );
};

export default Dashboard;
