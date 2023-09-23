import { Button } from "@mui/material";
import React from "react";

const MuiButton = () => {
  return (
    <div>
      <Button variant="text">Text</Button> {/* Less Important */}
      <Button variant="contained">Contained</Button>{" "}
      {/* More Important such as action button like Login/Register/Submit */}
      <Button variant="outlined">Outlined</Button>{" "}
      {/* Less Important similar to cancel or go back*/}
    </div>
  );
};

export default MuiButton;
