import React, { useEffect, useState } from "react";
import { axios } from "configs";

// Components
import { Navbar, EventCard } from "parts";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const resData = await axios.get("/event");
    setData(resData.data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <Navbar />

      <div className="container">
        {data.map((item, i) => (
          <EventCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
