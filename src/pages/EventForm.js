import React from "react";

// Components
import { Navbar } from "parts";
import { FormCard } from "parts";

const EventForm = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6">
            <FormCard />
          </div>
          <div className="col-sm-6">image</div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
