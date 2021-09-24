import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

type SearchedMProps = {
  title: string;
  timeDuration: number;
  releaseData: string;
  summarary: string;
  image: string;
  genres: string;
  saveFav:() => void;
};

const SearchedMovies = (props: SearchedMProps) => {
  return (
    <Card sx={{ maxWidth: 500 }} className="column-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>
              {props.title} ({props.releaseData})
            </h2>
            <h6>
              {props.genres} <strong>| {props.timeDuration}</strong>
            </h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.summarary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions onClick={props.saveFav}>
        <IconButton aria-label="add to favorites" size="large">
          <FavoriteIcon />
          <h6> Save to favorites!</h6>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SearchedMovies;
