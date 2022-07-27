import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./BlogCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import {  useFetch } from "../helpers/NewFunction";
import loading from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext'

function BlogCard() {

  const { isloading, blogCard } = useFetch();
  const navigate = useNavigate();
  const { currentUser, handleFavIcon } = useContext(AuthContext);


  const handleCardClick = (item) => {
    navigate(`details/${item.id}`, {state:{item}});
  };

  return (
    <div className="blogCardForm">
      {isloading ? (
        <div className="spinner">
          <img src={loading} alt="" />
        </div>
      ) : blogCard?.length === 0 ? (
        <div className="spinner">
          <h1>card bos</h1>
        </div>
      ) : (
        blogCard?.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}  className="cardContainer">
            <CardMedia
              src={item.imageUrl}
              className="cardImage"
              component="img"
              height="140"
              alt="blog image"
              sx={{ cursor: "pointer" }}
              onClick={() => handleCardClick(item)}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ cursor: "pointer" }}
              >
                {item?.title}
              </Typography>

              <Typography variant="h6" sx={{ fontSize: "12px" }}>
                {item?.date}{" "}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
              >
                {item?.content.substring(0, 150) + " ..."}
              </Typography>
            </CardContent>

            <CardActions sx={{ borderRadius: "50%" }} className="cardBottom">
              <FavoriteIcon
                 className={
                  item?.likedUserIds?.includes(currentUser.uid) > 0
                    ? "active"
                    : "favBtn"
                }
                sx={{ cursor: "pointer", marginRight: "5px" }}
                onClick={(e) => handleFavIcon(e, item)} />
              <span style={{ marginRight: "0.5rem" }}>{" "}
                {item.likedUserIds?.length}</span>
              <ModeCommentOutlinedIcon sx={{ cursor: "pointer" }} />
              <span> 0</span>

              <Typography className="email">{item?.email}</Typography>
            </CardActions>
            
          </Card>
        ))
      )}
    </div>
  );
}

export default BlogCard;
