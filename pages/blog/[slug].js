import he from "he";
import Head from "next/head";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getBlogSlugs, getPost } from "../../lib/data";

export const getStaticPaths = async () => {
  const slugsRes = await getBlogSlugs();
  const slugs = slugsRes.posts;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: {
      post: post.posts[0],
      content: await serialize(he.decode(post.posts[0].content)),
    },
  };
};

export default function Home({ post, content }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Kirk Abbott</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-6xl text-gray-900 font-bold">{post.title}</h1>
        <div className="flex space-x-3 mt-2">
          {post.tags.map((tag) => (
            <span
              className="uppercase text-sm tracking-wide m-2 bg-gray-100 px-2 py-1 rounded-lg text-lightteal"
              key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mb-8">
          <p className="text-lightteal">{new Date(post.date).toDateString()}</p>
          <div className="flex items-center">
            <p className="mr-4 text-lightteal text-lg font-semibold">{post.author.name}</p>
            <Image
              className="rounded-full"
              src={post.author.image.url}
              width={75}
              objectFit="cover"
              height={75}
            />
          </div>
        </div>

        <div className="prose prose-xl max-w-none">
          <MDXRemote {...content} />
        </div>
      </div>
    </div>
  );
}
