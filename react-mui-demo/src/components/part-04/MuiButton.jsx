import React from "react";
import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function MuiButton() {
  return (
    <Stack spacing={4}>
      {/* by default direction of Stack is column */}
      <Stack direction="row" spacing={2}>
        {/* less attention button */}
        <Button variant="text" href="https://google.com" target="_blank">
          text
        </Button>

        {/* more attention button, eg: login, register */}
        <Button variant="contained">contained</Button>

        {/* medium attention button, eg: cancel, goback*/}
        <Button variant="outlined">outlined</Button>
      </Stack>

      {/* color for text variant */}
      <Stack direction="row" spacing={2}>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>

      {/* color for contained variant */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      {/* color for outlined variant */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      {/* size of Button */}
      {/* by default display is flex, and size of flex element can't change manually */}
      <Stack direction="row" display="block" spacing={2}>
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

      {/* Material Icons */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>

        {/* disableElevation is used to disable the shadow on the button */}
        {/* disableRipple is used to disable the ripple animation while click */}
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("Send")}
        >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
