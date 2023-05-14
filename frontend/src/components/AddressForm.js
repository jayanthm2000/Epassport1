import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Date from "./Date";
import Employment from "./Employment";
import Qualification from "./Qualification";

export default function AddressForm({ data, setData }) {
  // props.func({fname,lname,dob,bplace,gender,states,district,mstatus,pan,etype,quali})
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>

      <Grid container spacing={3} mb={12}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
            value={data.first_name}
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
            value={data.last_name}
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Date /> */}

          <form>
            <input
              type="date"
              name="DOB"
              onChange={(e) => setData({ ...data, DOB: e.target.value })}
              value={data.DOB}
            />
          </form>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, birth_place: e.target.value })}
            value={data.birth_place}
            required
            id="birth_place"
            name="birth_place"
            label="Birth Place"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            value={data.gender}
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, state: e.target.value })}
            value={data.state}
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, district: e.target.value })}
            value={data.district}
            required
            id="district"
            name="district"
            label="District"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) =>
              setData({ ...data, maritial_status: e.target.value })
            }
            value={data.maritial_status}
            required
            id="maritial_status"
            name="maritial_status"
            label="Marital Status"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setData({ ...data, PAN: e.target.value })}
            value={data.PAN}
            required
            id="PAN"
            name="PAN"
            label="PAN"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Employment/> */}

          <form>
            <select
              onChange={(e) =>
                setData({ ...data, employement_type: e.target.value })
              }
              value={data.employement_type}
              name="employement_type"
            >
              <option selected>Please choose Employe Type</option>

              <option>Government</option>

              <option>Private</option>

              <option>Student</option>
            </select>
          </form>
        </Grid>

        <Grid item xs={12} sm={6}>
          <form>
            <select
              name="qualification"
              onChange={(e) =>
                setData({ ...data, qualification: e.target.value })
              }
              value={data.qualification}
            >
              <option selected>Please choose Qualification</option>
              <option>Graduate</option>
              <option>HSC</option>
              <option>SSC</option>
            </select>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
