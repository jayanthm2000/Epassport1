import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";

import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm({ data, setData }) {
  // props.func2({faname,laname,moname,lasname})

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Family Details
      </Typography>

      <Grid container spacing={3} mb={40}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, father_name: e.target.value })}
            value={data.father_name}
            required
            id="father_name"
            label="Father Name"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, surname: e.target.value })}
            value={data.surname}
            required
            id="surname"
            label="Surnamer"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, mother_name: e.target.value })}
            value={data.mother_name}
            required
            id="mother_name"
            label="Mother Name"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={(e) => setData({ ...data, surnames: e.target.value })}
            value={data.surnames}
            id="surname"
            label="Surname"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
