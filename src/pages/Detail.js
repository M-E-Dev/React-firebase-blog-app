import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { useBlog } from "../contexts/BlogContextProvider";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { teal, blue, red, lime, orange, lightBlue } from '@mui/material/colors';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Detail() {
  // const { id, author, content, get_comment_count, get_like_count, image, published_date, title } = match ;
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { getOneBlog, deleteOneBlog } = useBlog();
  const { id } = useParams();
  const result = getOneBlog(id);
  const res = result ? result[0] : { title: "", content: "", image: "" };

  const deleteHandler = (id) => {
    deleteOneBlog(id);
    navigate("/");
    alert("Deleted Successfully");
  };
  const updateHandler = (id) => {
    navigate(`/update-blog/${id}`);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container justifyContent="center" >
      <Card sx={{ maxWidth: 600, mt:1, px:4, py:1, height:"80vh", bgcolor: red[300]}}>
        <Typography variant="h5" noWrap>
          DETAILS
        </Typography>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              sbk
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={res.title + " " + "(by " + res.author + ")"}
          // subheader={res.published_date}
        />
        <CardMedia
          component="img"
          height="275"
          image={res.image || res.title}
          alt={res.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {res.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              color={res.get_like_count > 0 ? "secondary" : "disabled"}
            />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {res.get_like_count}
          </Typography>
          <IconButton aria-label="comment count">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {res.get_comment_count}
          </Typography>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph></Typography>
            <Typography paragraph>
              
            </Typography>
            <Typography paragraph>
              
            </Typography>
            <Typography paragraph>
              
            </Typography>
            <Typography>
              
            </Typography>
          </CardContent>
        </Collapse> */}
        {res.author === currentUser?.email && (
          <Grid container justifyContent="center" sx={{ gap: 15 }}>
            <Button variant="contained" onClick={() => updateHandler(res.id)}>
              Update
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteHandler(res.id)}
            >
              Delete
            </Button>
          </Grid>
        )}
      </Card>
    </Grid>
  );
}
