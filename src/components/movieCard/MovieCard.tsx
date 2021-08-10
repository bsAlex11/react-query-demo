import { FunctionComponent } from "react";
import {
Button, Card, CardActionArea, CardActions, 
CardContent, CardMedia,
makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';

import { TMovie } from "../../types";
import useAddFavoriteMovie from "../../hooks/useAddFavoriteMovie/useAddFavoriteMovie";
import useDeleteFavoriteMovie from "../../hooks/useDeleteFavoriteMovie/useDeleteFavoriteMovie";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
});

type TProps = {
  movie: TMovie;
  isFavorite: boolean;
};

const MovieCard: FunctionComponent<TProps> = ({movie, movie: { Poster, Title, id } = {} as TMovie, isFavorite }) => {
  const [
    {
      data,
      isLoading: isFetchLoading,
      isError,
      isSuccess,
    },
    { mutate: addMovieToFavorites }
  ] = useAddFavoriteMovie();
  const [
    {
      isLoading: isDeleteLoading,
    },
    { mutate: deleteFavoriteMovie }
  ] = useDeleteFavoriteMovie();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie poster"
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
        {
          isFetchLoading || isDeleteLoading ? 
            <CircularProgress />
           :
            isFavorite && id ? (
              <DeleteIcon onClick={() => deleteFavoriteMovie(id)}/>
            ) :
            ( !isSuccess ?
              <Button
                size="small" 
                color="primary"
                variant="outlined" 
                onClick={() => addMovieToFavorites(movie)}
              >
                Add to favorites
              </Button> :
                <Chip label="Added" variant="outlined" />
              )
        }
      </CardActions>
    </Card>
  );
};

export default MovieCard;
