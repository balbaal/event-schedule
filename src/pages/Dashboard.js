import React, { useState, useEffect } from "react";
import { axios } from "configs";
import { Input } from "elements";
import { Table } from "parts";

// Components
import { Navbar } from "parts";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const resData = await axios.get("/event");
    setEvents(resData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "Participant",
        field: "participant",
        sort: "asc",
        width: 150,
      },
      {
        label: "Note",
        field: "note",
        sort: "asc",
        width: 150,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 150,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 150,
      },
    ],
    rows: events,
  };

  console.log("data :>> ", data);

  return (
    <div>
      <Navbar />

      <div className="container mt-3">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
