import Head from "next/head";

import Hero from "../components/Hero";
import { getPostsAndPortfolio } from "../lib/data";

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolio();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Kirk Abbott</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

     
    </div>
  );
}
