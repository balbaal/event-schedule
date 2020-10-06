import React from "react";

const EventCard = ({ data }) => {
  return (
    <div className="event-card shadow shadow-sm mb-5">
      <figure className="event-card__figure">
        <img
          src={`${process.env.REACT_APP_API_EVENT}/${data.picture}`}
          className="event-card__figure__img"
        />
      </figure>
      <div className="event-card__content">
        <div className="event-card__content__header">
          <h2 className="mb-2">{data.location}</h2>
          <h3 className="mb-2">{data.title}</h3>
          <h4 className="mb-2"> {data.date}</h4>
        </div>
        <div className="event-card__content__participant">
          <p>{data.participant}</p>
        </div>
        <div className="event-card__content__note">
          Note: <br />
          <p>{data.note}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
