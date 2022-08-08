import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContextProvider';
import { Grid } from "@mui/material";
import { BlogForm } from '../components/BlogForm';
import placeholderPng from "../assets/placeholder.png"


const UpdateBlog = () => {

  const { getOneBlog, updateBlog } = useBlog();
  const navigate = useNavigate();
  const {id} = useParams();
  const result = getOneBlog(id)

  // Result gelmemişse hata almamak için conditional kullandık
  const res = useMemo(()=>{
    return result ? result[0] : { title: "", content: "", image: "" }
  }, [result])

  const [updatedBlog, setUpdatedBlog] = useState(res);
  
  useEffect(() => {
    setUpdatedBlog(res)
  }, [res])

  const handler = (blogToUpdate) => {
    try{
      // update ile yeni key eklenmez ama add ile eklenir
      updateBlog(res?.id, blogToUpdate);
      navigate("/")
      alert("Blog updated...")
    } catch {
      alert("Cannot updated...")
    };
  };


  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem", maxHeight:"80%"}}
    >
      <Grid
        container
        textAlign="center"
        direction="column"
        alignItems="center"
        alignContent="center"
        style={{ width: "80vh" }}
      >
        <img src={updatedBlog?.image || placeholderPng} alt="blog" style={{ width: "300px" }}/>
        <BlogForm blog={updatedBlog} handler={handler} />


      </Grid>
    </div>
  )
}

export default UpdateBlog;



// import React, { useContext, useState } from "react";
// import { Grid, TextField, Button, Stack, Box } from "@mui/material";
// import { UpdateCard } from "../helpers/NewFunction";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import {Toastify} from "../helpers/toastNotify";

// const UpdateBlog = () => {
//   const navigate = useNavigate()
//   const location = useLocation();
//   const item = location.state.item;
  
  
//   const {currentUser}=useContext(AuthContext)
  
//   const newValue = { title: item.title,
//     imageUrl: item.imageUrl,
//     content: item.content,
//     date: item.date,
//     email: currentUser.email,
    
//   }
//   // console.log(item);
//   const initialValues = { ...item };

//   const [info, setInfo] = useState(initialValues);

//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value, defaultValue } = e.target;
//     // setInfo({ ...newValue, [name]: (value ? value : defaultValue), });
//     setInfo({ ...newValue,  [name]: (value ? value : defaultValue),email:item?.email ,id:item?.id });
//   }
//   const handleFormUpdate = (e) => {
//     e.preventDefault();
//     UpdateCard(info)
//     navigate("/", { state: { item } });
//     setInfo({ ...info, title: "", imageUrl: "", content: "", date: "" });
//     Toastify("update succeeded");
    

//   }
  
//   return (
//     <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
//       <Grid container textAlign="center" direction="column" style={{ width: "300px" }}>
//       <h2 className="contact-header">────Update Bolg────</h2>

//       <Box style={{ backgroundColor: "white", padding: "20px" }}>
//         <form onSubmit={handleFormUpdate}>
//           <Stack spacing={3} direction="column">
//             <TextField
//               type="text"
//               variant="outlined"
//               name="title"
//               defaultValue={item?.title}
//               onChange={(e)=>handleChange(e)}
  
//               label="Title*"
//               placeholder="Title"
//               size="small"
//             />
//             <TextField
//               variant="outlined"
//               name="imageUrl"
//               defaultValue={item?.imageUrl}
//               onChange={(e)=>handleChange(e)}

//               label="Image URL*"
//               placeholder="Image URL"
//               size="small"
//             />
//             <TextField
//               className="newBlog-input"
//               id="outlined-textarea"
//               name="content"
//               defaultValue={item?.content}
//               onChange={(e)=>handleChange(e)}
//               label="Content*"
//               placeholder="Content"
//               multiline
//               rows={7}
//             />

//             <Button
//               variant="contained"
//               type="submit"
//               value="Submit"
//                 onClick={handleFormUpdate}
//               >
//               Edit
//             </Button>
//           </Stack>
//         </form>
//       </Box>
//     </Grid>
//     </div>
//   );
// };



// export default UpdateBlog
