import { Button, Stack } from "@mui/material";
import React from "react";

const MuiButton = () => {
  return (
    <Stack spacing={4} alignItems={"center"}>
      <Stack spacing={2} direction="column">
        <Button variant="text" color="secondary" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
