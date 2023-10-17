import { Box, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import React from "react";
import Drawer from "./Drawer";

const MuiButton = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Stack spacing={4} alignItems={"center"} display="block">
          <Stack spacing={2} direction="row" display="block">
            <Button variant="text" color="secondary" href="https://google.com">
              Text
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined" color="warning">
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" display="block">
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              secondary
            </Button>
            <Button variant="contained" color="warning">
              warning
            </Button>
            <Button variant="contained" color="warning" disableElevation>
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
          <Stack spacing={2} direction="row" display="block">
            <Button variant="contained" size="small">
              small
            </Button>
            <Button variant="contained" size="medium">
              medium
            </Button>
            <Button variant="contained" size="large">
              large
            </Button>
          </Stack>
          <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">
              small
            </Button>
            <Button variant="contained" size="medium">
              medium
            </Button>
            <Button variant="contained" size="large">
              large
            </Button>
          </Stack>
          <Stack spacing={2} direction={"row"} display="block">
            <Button variant="contained" startIcon={<SendIcon />}>
              Send
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            <IconButton
              color="success"
              size="medium"
              aria-label="send"
              onClick={(e) => alert(`this is click event ${e.detail}`)}
            >
              <SendIcon />
            </IconButton>
            <Button
              variant="contained"
              color="warning"
              startIcon={<DeleteOutlineRoundedIcon />}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default MuiButton;
