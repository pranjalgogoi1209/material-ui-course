import React from "react";
import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

export default function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        {/* by default variant is outlined */}
        <TextField label="Small-Secondary" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form-Input" required error />
        <TextField
          label="Form-Input"
          required
          helperText="This is helper text"
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Don't share your password"
        />
        <TextField
          label="Read-Only"
          helperText="You can't edit"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack>
        <TextField
          name="Name"
          //   value={value}
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={value ? "Don't Share Password" : "Password is Required"}
        />
      </Stack>
    </Stack>
  );
}
