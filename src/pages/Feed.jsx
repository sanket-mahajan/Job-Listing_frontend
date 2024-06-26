import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostsByQuery } from "../redux/postsSlice";

const Feed = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (query.length === 0) {
      dispatch(fetchPosts());
    } else if (query.length > 2) {
      dispatch(fetchPostsByQuery(query));
    }
  }, [query, dispatch]);

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {posts &&
        posts.map((p) => (
          <Grid key={p.id} item xs={12} md={6} lg={4}>
            <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "2rem", fontWeight: "600" }}
              >
                {p.profile}
              </Typography>
              <Typography
                sx={{ color: "#585858", marginTop: "2%" }}
                variant="body2"
              >
                Description: {p.desc}
              </Typography>
              <br />
              <br />
              <Typography variant="h6">
                Years of Experience: {p.exp} years
              </Typography>
              <Typography gutterBottom variant="body2">
                Skills:
              </Typography>
              {p.techs.map((s, i) => (
                <Typography variant="body2" gutterBottom key={i}>
                  {s}
                </Typography>
              ))}
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Feed;
