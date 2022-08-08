import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider'
import { useBlog } from '../contexts/BlogContextProvider';
import { Grid } from "@mui/material";
import { BlogForm } from '../components/BlogForm';


const NewBlog = () => {
  const { currentUser } = useAuth();
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const blog = {
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now()
  };

  const handler = (newBlog) => {
    try{
      // update ile yeni key eklenmez ama add ile eklenir
      addBlog(newBlog);
      navigate("/")
      alert("Blog added...")
    } catch {
      alert("Cannot be added...")
    }
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "3rem", borderRadius:"20px" }}
    >
    <Grid  
        container
        textAlign="center"
        direction="column"
        style={{ width: "100vh", borderRadius:"20px" }}
      >
        <h2 className="contact-header">────New Blog────</h2>

        <BlogForm blog={blog} handler={handler} />


      </Grid>
    </div>
  )
}

export default NewBlog;

// import React, { useContext } from "react";
// import { Grid, TextField, Button, Stack, Box } from "@mui/material";
// import { NewContext } from "../contexts/NewContext";
// import { useNavigate } from "react-router-dom";
// import { AddNewBlog } from "../helpers/NewFunction";

// const NewBlog = () => {
//   const navigate = useNavigate();
//   const { info,setInfo, handleChange } = useContext(NewContext);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // console.log(info);

//     AddNewBlog(info);
//     setInfo({ ...info, title: "", imageUrl: "", content: "", date:""});
//     navigate("/");
//   };

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
//     >
//       <Grid
//         container
//         textAlign="center"
//         direction="column"
//         style={{ width: "300px" }}
//       >
//         <h2 className="contact-header">────New Bolg────</h2>

//         <Box style={{ backgroundColor: "white", padding: "20px" }}>
//           <form onSubmit={handleFormSubmit}>
//             <Stack spacing={3} direction="column">
//               <TextField
//                 type="text"
//                 variant="outlined"
//                 name="title"
//                 value={info.title}
//                 onChange={handleChange}
//                 label="Title"
//                 placeholder="Title"
//                 size="small"
//                 required

//               />
//               <TextField
//                 id="outlined-required"
//                 type="url"
//                 variant="outlined"
//                 name="imageUrl"
//                 value={info.imageUrl}
//                 onChange={handleChange}
//                 label="Image URL"
//                 placeholder="Image URL"
//                 size="small"
//                 required
//               />
//               <TextField
//                 className="newBlog-input"
//                 id="outlined-textarea"
//                 name="content"
//                 value={info.content}
//                 onChange={handleChange}
//                 label="Content"
//                 placeholder="Content"
//                 required

//                 multiline
//                 rows={7}
//               />

//               <Button
//                 onClick={handleFormSubmit}
//                 variant="contained"
//                 type="submit"
//                 value="Submit"
//               >
//                 add
//               </Button>
//             </Stack>
//           </form>
//         </Box>
//       </Grid>
//     </div>
//   );
// };

// export default NewBlog;
