import { fetchImage } from "@/utils";
import Link from "next/link";
export default function Movie({ title, id, release_date, poster_path }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <img src={fetchImage(poster_path)} alt="" width={800} height={800} />
      </Link>
    </div>
  );
}
