"use client";
import { TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function EmailInput() {
  return (
    <TextField
      label="Email"
      type="email"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{ mb: 2 }}
      fullWidth
    />
  );
}
