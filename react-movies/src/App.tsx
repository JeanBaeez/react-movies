import IndividualMovie from "./Movies/IndividualMovie";
import { MovieDTO } from "./Movies/Movies.model.d";
import MoviesList from "./Movies/MoviesList";


function App() {
  const InTheaters: MovieDTO[] = [{
    id: 1,
    title: "Test Movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
  },
  {
    id: 2,
    title: "Test Movie 2",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
  }
  ];
  const UpconmingReleases: MovieDTO[] = [
    {
      id: 3,
      title: "Test Movie 3",
      poster: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
    },
    
  ]

return (
  <div>
    <h3>In Theaters</h3>
    <MoviesList movies={InTheaters} />
    <h3>Upcoming Releases</h3>
    <MoviesList movies={UpconmingReleases} />
    </div>
    
  );
}

export default App;
