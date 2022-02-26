import he from "he";
import Head from "next/head";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { getPortfolioItem, getPortfolioSlugs } from "../../lib/data";

export const getStaticPaths = async () => {
  const slugsRes = await getPortfolioSlugs();
  const slugs = slugsRes.portfolios;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const portfolioItem = await getPortfolioItem(params.slug);
  return {
    props: {
      portfolioItem: portfolioItem.portfolios[0],
      content: await serialize(he.decode(portfolioItem.portfolios[0].content)),
    },
  };
};

export default function Home({ portfolioItem, content }) {
  return (
    <div className="min-h-screen h-full">
      <Head>
        <title>Kirk Abbott</title>
        <meta name="description" content="Kirk Abbott Site" key={"title"} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 min-h-screen">
        <h1 className="text-6xl text-white-900 font-bold">{portfolioItem.title}</h1>
        <div className="flex justify-between items-center mt-4">
          <p className="text-white-700">{new Date(portfolioItem.date).toDateString()}</p>
          <div className="flex space-x-3">
            {portfolioItem.tags.map((tag) => (
              <span
                className="uppercase text-sm tracking-wide m-2 bg-gray-100 px-2 py-1 rounded-lg text-white-900"
                key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="prose prose-xl py-4">{portfolioItem.description}</p>
        <Image
          src={portfolioItem.coverImage.url}
          width={portfolioItem.coverImage.width}
          height={portfolioItem.coverImage.height}
          alt={portfolioItem.title}
        />

        <div className="prose prose-xl max-w-none mt-4">
          <MDXRemote {...content} />
        </div>
      </div>
    </div>
  );
}
