import React from "react";
import "../scss/settings.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Settings = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="settings">
      <div className="settings__input">
        <label htmlFor="title">title:</label>
        <input type="text" />
      </div>
      <div className="settings__input">
        <label htmlFor="title">Keywords:</label>
        <input type="text" />
      </div>
      <div className="settings__input">
        <label htmlFor="title">Description:</label>
        <input type="text" />
      </div>
      <div className="settings__input">
        <label htmlFor="title">Main Address:</label>
        <input type="text" />
      </div>
      <div className="settings__left">
        <div className="settings__left__input">
          <label htmlFor="title">Email:</label>
          <input type="text" />
        </div>
        <div className="settings__left__input">
          <label htmlFor="title">Telefon mobil:</label>
          <input type="text" />
        </div>{" "}
        <div className="settings__left__input">
          <label htmlFor="title">Telefon Şəhər:</label>
          <input type="text" />
        </div>{" "}
        <div className="settings__left__input">
          <label htmlFor="title">Logo:</label>
          <input type="text" />
        </div>{" "}
        <div className="settings__left__input">
          <label htmlFor="title">Favicon</label>
          <input type="text" />
        </div>
        <button>Add İFrame</button>
      </div>
      <div className="settings__right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12162.86306487345!2d49.969643132932184!3d40.34865086996737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403064d35ad50583%3A0x9b3f57d79832c3da!2sZigh%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1675247165596!5m2!1sen!2s"
          width="100%"
          height="85%"
          style={{ border: "none" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Settings;
