import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";

export default function MuiButtonGroup() {
  return (
    <div>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("first")}>first</Button>
          <Button>second</Button>
          <Button>third</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}
