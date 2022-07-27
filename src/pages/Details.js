import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../components/BlogCard.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useLocation, useNavigate} from "react-router-dom";
import { DeleteCard } from "../helpers/NewFunction";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  console.log(item);
 
  const { currentUser,handleFavIcon} = useContext(AuthContext)
  // console.log(currentUser)
  
  const handleUpdate = () => {
    navigate(`/updateblog/${item.id}`,{state:{item}})
  
  }
  
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}} >
      <Card  sx={{ maxWidth: 345 }} className="cardContainer">
        <CardMedia
          className="cardImage"
          src={item.imageUrl}
          image={item.imageUrl}
          component="img"
          height="140"
          alt="blog image"
          sx={{ cursor: "pointer" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ cursor: "pointer" }}
          >
            {item.title}
          </Typography>

          <Typography variant="h6" sx={{ fontSize: "12px" }}>
            {item.date}{" "}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
          >
            {item.content}
          </Typography>
        </CardContent>

        <CardActions sx={{ borderRadius: "50%" }} className="cardBottom">
          <FavoriteIcon className={
              item?.likedUserIds?.includes(currentUser.uid) > 0
                ? "active"
                : "favBtn"
            }
            sx={{ cursor: "pointer", marginRight: "5px" }}
            onClick={(e) => handleFavIcon(e, item)}/>
          <span > {item?.likedUserIds?.length}</span>
          <ModeCommentOutlinedIcon sx={{ cursor: "pointer" }} />
          <span>0 </span>

          <Typography className="email">{item.email}</Typography>
        </CardActions>
        
        {(currentUser?.email === item?.email) ? (
        <div>
            
          <Button
            onClick={() =>handleUpdate(item.id)}
            
          >
            UPDATE
          </Button>
  
          <Button onClick={() => DeleteCard(item.id, navigate)}>DELETE</Button>
        </div>): <div className="blogWarning">
            Only the author of this blog can make changes...
          </div>}
      </Card>
    </div>
  );
};

export default Details;
