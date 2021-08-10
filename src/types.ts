export type TMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  id?: number;
};

export type TMoviesResponse = {
  Response: string;
  Search: TMovie[];
  totalResults: string;
}
