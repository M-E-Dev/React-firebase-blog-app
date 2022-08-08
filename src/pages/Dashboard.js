import React from "react";
import BlogCard from "../components/BlogCard";
import { useBlog } from "../contexts/BlogContextProvider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  const { currentBlogs } = useBlog();
  return (
      <Grid sx={{height:"100%"}} >
        <Typography variant="h6" noWrap sx={{ mt:"20px" }}>
          To see details of a blog, click to its image...
        </Typography>
        <Grid container justifyContent="center" sx={{ mt:"50px" }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={5}>
              {currentBlogs === undefined ? (
                <img
                  style={{
                    marginTop: "80px",
                    height: "25vh",
                    borderRadius: "15px",
                  }}
                  src="https://i.gifer.com/FFb1.gif"
                  alt="loading"
                  className="loadingGif"
                />
              ) : currentBlogs ? (
                // console.log(currentBlogs)
                currentBlogs.map((item, index) => (
                  <BlogCard post={item} key={index} />
                ))
              ) : (
                <h3>No data avaible!</h3>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
