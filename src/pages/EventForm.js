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
          <div className="col-sm-6 p-4 shadow-sm bg-primary event-form">
            <FormCard />
          </div>
          <div className="col-sm-6 hero-form">
            <img
              className="w-100 h-100"
              src="https://envato-shoebox.imgix.net/3872/687e-35da-4cdf-8a2b-dbc250532cb4/IMG_2244.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=900&s=b22fb9512ff4f33540c4e8ebccf5e313"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
