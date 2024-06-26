import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        Welcome to Job Listing
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" sx={{ mx: 1 }}>
          <Link
            to="/employer/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            Employer Dashboard
          </Link>
        </Button>
        <Button variant="contained" sx={{ mx: 1 }}>
          <Link
            to="/employee/feed"
            style={{ textDecoration: "none", color: "white" }}
          >
            Employee Feed
          </Link>
        </Button>
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Navigate to the Employer Dashboard to manage job listings or go to the
        Employee Feed to view job postings.
      </Typography>
    </Box>
  );
};

export default Home;
