import React, { useState } from "react";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const skillSet = ["Javascript", "Java", "Python", "Django", "Rust"];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/post", form);
    navigate("/employee/feed");
  };

  const handleChange = (e) => {
    setForm({ ...form, techs: [...form.techs, e.target.value] });
  };

  return (
    <Paper sx={{ padding: "2%" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Job-profile"
            variant="outlined"
            value={form.profile}
          />
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={form.exp}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Job-desc"
            variant="outlined"
            value={form.desc}
          />
          <Box sx={{ margin: "1% auto" }}>
            <h3>Please mention required skills</h3>
            <ul>
              {skillSet.map((name, index) => (
                <li key={index}>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      onChange={handleChange}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                </li>
              ))}
            </ul>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
