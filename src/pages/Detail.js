import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, useParams  } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContextProvider"
import { useBlog } from '../contexts/BlogContextProvider';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Button } from '@mui/material';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Detail() {

  // const { id, author, content, get_comment_count, get_like_count, image, published_date, title } = match ;
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { getOneBlog, deleteOneBlog } = useBlog();
  const {id} = useParams();
  const result = getOneBlog(id)
  const res = result ? result[0] : { title: "", content: "", image: "" }


  const deleteHandler = (id) => {
    deleteOneBlog(id);
    navigate("/");
    alert("Deleted Successfully")
  }
  const updateHandler = (id) => {
    navigate(`/update-blog/${id}`);
  };
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} >
      <Typography variant='h3' noWrap >DETAILS</Typography>
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
        title={res.title + " " +"(by " + res.author + ")"}
        subheader={res.published_date}
      />
      <CardMedia
        component="img"
        height="194"
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
          <FavoriteIcon color={res.get_like_count > 0 ? "secondary" : "disabled"} />
        </IconButton>
        <Typography variant='body2' color="textSecondary">
          {res.get_like_count}
        </Typography>
        <IconButton aria-label="comment count">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant='body2' color="textSecondary">
          {res.get_comment_count}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      { res.author === currentUser?.email && (
        <div>
          <Button variant='contained' onClick={()=> updateHandler(res.id)}>Update</Button>
          <Button variant='contained' color='secondary' onClick={()=> deleteHandler(res.id)}>Delete</Button>
        </div>
      ) }
    </Card>
  );
}
