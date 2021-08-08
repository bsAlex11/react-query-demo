import { FunctionComponent } from "react";
import {
Button, Card, CardActionArea, CardActions, 
CardContent, CardMedia,
makeStyles, Typography } from "@material-ui/core";

import { addToFavorites } from "../../api/requests";
import useAddFavoriteMovie from "../../hooks/useAddFavoriteMovie/useAddFavoriteMovie";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
});

export type TMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type TProps = {
  movie: TMovie;
};

const MovieCard: FunctionComponent<TProps> = ({movie, movie: { Poster, Title } = {} as TMovie }) => {

  const [
    {
      data,
      isLoading,
      isError
    },
    { mutate: addMovieToFavorites }
  ] = useAddFavoriteMovie();
console.log(data, 'addedd');

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Poster}
          title={Title}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom component="h4">
            {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small" 
          color="primary"
          variant="outlined" 
          onClick={() => addMovieToFavorites(movie)}
        >
          Add to favorites
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
