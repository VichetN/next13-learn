import { fetchURL } from "@/utils";
import { Inter } from "@next/font/google";
import Movie from "./components/Movie";

const inter = Inter({ subsets: ["latin"] });

export const fetchMovies = async () => {
  const movies = await fetch(
    fetchURL(`/movie/popular?api_key=${process.env.API_KEY}`)
  ).then((res) => res.json());
  return movies;
};

export default async function Home() {
  const movies = await fetchMovies();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies?.results?.map((load) => (
          <Movie
            key={load.id}
            title={load.title}
            id={load.id}
            poster_path={load.poster_path}
            release_date={load?.release_date}
          />
        ))}
      </div>
    </main>
  );
}
