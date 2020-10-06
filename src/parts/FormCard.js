import React, { useState } from "react";

// Component
import { Input } from "elements";

const FormCard = () => {
  const [title, setTitle] = useState("");

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
      </div>
    </div>
  );
};

export default FormCard;
