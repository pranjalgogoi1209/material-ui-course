import React, { useState } from "react";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export default function ToggleBtn() {
  const [formats, setFormats] = useState(null);
  const handleFormatChange = (e, alignment) => {
    console.log(alignment);
    setFormats(alignment);
  };

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        size="small"
        color="warning"
        orientation="vertical"
        exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
