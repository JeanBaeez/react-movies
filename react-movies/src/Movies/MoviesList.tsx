import IndividualMovie from "./IndividualMovie";
import { MovieDTO } from "./Movies.model.d";
import css from "./moviesList.module.css";

export default function MoviesList(props:MoviesListProps) {
    return (
        <div className={css.div}>
           {props.movies.map(movie => <IndividualMovie{...movie} key={movie.id} />)}
        </div>
    )
}

interface MoviesListProps { 
    movies: MovieDTO[];

}