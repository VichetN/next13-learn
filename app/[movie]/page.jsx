import { fetchImage, fetchURL } from "@/utils";
import Image from "next/image";

export async function generateStaticParams() {
  const movies = await fetch(
    fetchURL(`/movie/popular?api_key=${process.env.API_KEY}`)
  ).then((res) => res.json());
  return movies?.result?.map((e) => ({
    movie: String(e?.id),
  }));
}

const fetchMovieDetail = async (id) => {
  return await fetch(fetchURL(`/movie/${id}?api_key=${process.env.API_KEY}`), {
    // next: {
    //   revalidate: 30,
    // },
  }).then((res) => res.json());
};

export default async function MovieDetail({ params }) {
  const data = await fetchMovieDetail(params?.movie);
  return (
    <div>
      <div>
        <h1 className="text-2xl">{data?.title}</h1>
        <h2 className="text-lg text-gray-400">{data?.release_date}</h2>
        <h2>Runtime: {data?.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">
          {data?.status}
        </h2>
        <Image
          src={fetchImage(data?.backdrop_path)}
          height={1000}
          width={1000}
          className="my-12 w-full"
          priority
          alt={data?.tagline}
        />
        <p>{data?.overview}</p>
      </div>
    </div>
  );
}
