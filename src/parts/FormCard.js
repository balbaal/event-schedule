import React, { useState } from "react";

// Component
import { Input, Button } from "elements";

const FormCard = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [picture, setPicture] = useState("");

  const __handleSubmit = () => {
    console.log("title :>> ", title);
  };

  return (
    <div className="form-card">
      <h2 className="form-card__title">Add Event</h2>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <Input
              type="text"
              name="title"
              placeholder="Title . . ."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <Input
              type="text"
              name="location"
              placeholder="Location . . ."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <Input
              type="text"
              name="participant"
              placeholder="Participant . . ."
              value={participant}
              onChange={(e) => setParticipant(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <Input
              type="date"
              name="date"
              placeholder="Date . . ."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <Input
              type="textarea"
              name="note"
              placeholder="Note . . ."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <Input
              type="file"
              name="picture"
              placeholder="Picture . . ."
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <Button
          title="Add Event"
          className="btn-primary btn-md float-right"
          onClick={__handleSubmit}
        />
      </div>
    </div>
  );
};

export default FormCard;
