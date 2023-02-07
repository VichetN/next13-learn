import { fetchImage } from "@/utils";
import { getDomain } from "@/utils/getDomain";
import { NextSeo } from "next-seo";
import { fetchMovieDetail } from "./page";

export default async function Head({ params }) {
  const data = await fetchMovieDetail(params?.movie);
  const seo = {
    title: data?.title,
    description: data?.overview,
    linkTo: "",
    images: [data?.backdrop_path],
  };
  return (
    <>
      <title>{seo?.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={seo?.description} />
      <link rel="icon" href="/favicon.ico" />

      <NextSeo
        useAppDir
        title={seo?.title ? seo?.title.substring(0, 70) : "A title of page"}
        description={
          seo?.description
            ? seo?.description.substring(0, 320)
            : "A short description goes here."
        }
        canonical={`${getDomain()}${seo?.linkTo}`}
        openGraph={{
          url: `${getDomain()}${seo?.linkTo}`,
          title: seo?.title.substring(0, 70),
          description: seo?.description
            ? seo?.description.substring(0, 320)
            : "A short description goes here.",
          images:
            seo?.images > 0
              ? seo?.images?.map((load) => ({
                  url: fetchImage(load),
                }))
              : [
                  {
                    url: `${getDomain()}/images/android-chrome-192x192.png`,
                  },
                ],
          site_name: "Webite Name",
          type: "website",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
