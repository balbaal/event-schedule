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
        <div className="row mt-3">
          {data.map((item, i) => (
            <div className="col-md-3 col-sm-12">
              <EventCard key={i} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
