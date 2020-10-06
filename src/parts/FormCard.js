import React, { useState } from "react";
import { axios } from "configs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component
import { Input, Button } from "elements";

const FormCard = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [picture, setPicture] = useState("");

  const __handleSubmit = async (e) => {
    const payload = new FormData();

    payload.append("title", title);
    payload.append("location", location);
    payload.append("participant", participant);
    payload.append("date", date);
    payload.append("note", note);
    payload.append("picture", picture[0]);

    await axios.post("/event", payload, {
      headers: { contentType: "multipart/form-data" },
    });

    toast.success(`Event Created ${title}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="form-card">
      <h2 className="form-card__title mb-3">Add Event</h2>

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
              onChange={(e) => setPicture(e.target.files)}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <Button
          title="Add Event"
          className="btn-light btn-md float-right"
          onClick={__handleSubmit}
        />
      </div>
    </div>
  );
};

export default FormCard;
