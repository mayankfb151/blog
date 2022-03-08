import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function DateTimePicker() {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="datetime-local"
        label="Post date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: "100%" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
