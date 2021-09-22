import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type SearchedMProps = {
  title: string;
  timeDuration: number;
  releaseData: string;
  summarary: string;
  image: string;
  genres: string;
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
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.summarary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SearchedMovies;
