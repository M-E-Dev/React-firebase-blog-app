import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Stack, Box } from "@mui/material";


export const BlogForm = (props) => {
  const { blog, handler } = props;
  const [newBlog, setNewBlog] = useState(blog)
  useEffect(() => {
    setNewBlog(blog)
  }, [blog])

  return (
    <Box style={{ backgroundColor: "white", padding: "20px" }}>
      <form onSubmit={ () => handler(newBlog)} >
        <Stack spacing={3} direction="column">
          <TextField
            type="text"
            variant="outlined"
            name="title"
            value={newBlog.title}
            // onChance'ye referans veriyorsak parantez gerekmez ama parametre varsa arrow func
            onChange={(e) => setNewBlog({...newBlog, title:e.target.value})}
            label="Title"
            placeholder="Title"
            size="small"
            required
          />
          <TextField
            id="outlined-required"
            type="url"
            variant="outlined"
            name="imageUrl"
            value={newBlog.image}
            onChange={(e) => setNewBlog({...newBlog, image:e.target.value})}
            label="Image URL"
            placeholder="Image URL"
            size="small"
            required
          />
          <TextField
            className="newBlog-input"
            id="outlined-textarea"
            name="content"
            value={newBlog.content}
            onChange={(e) => setNewBlog({...newBlog, content:e.target.value})}
            label="Content"
            placeholder="Content"
            required
            multiline
            rows={7}
          />

          <Button
        //   Burada onclick onsubmit yaparsk yukarıdaki requiredlar çalışmaz
            variant="contained"
            type="submit"
            value="Submit"
          >
            SUBMIT
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
